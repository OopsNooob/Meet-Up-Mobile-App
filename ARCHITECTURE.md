# Meet Up Mobile App - Kiến trúc và Quyết định Thiết kế (Decision Log)

Tài liệu này ghi nhận quá trình Brainstorming và các quyết định thiết kế cho ứng dụng di động kết nối bạn bè và gợi ý địa điểm gặp mặt (Đồ án SE405).

## 1. Tóm tắt dự án (Understanding Summary)
- **Mục tiêu**: Xây dựng một ứng dụng React Native (Mobile) và NestJS (Backend) độc lập.
- **Tính năng cốt lõi**: Chia sẻ vị trí realtime, gợi ý địa điểm gặp mặt thông minh cho nhóm, bình chọn địa điểm và nhận thông báo (Push Notification).
- **Đối tượng**: Người dùng thiết bị di động (Android).
- **Phạm vi**: Ứng dụng tập trung vào hệ thống chia sẻ vị trí và thuật toán gợi ý; Web Admin chỉ ở mức tối giản.

## 2. Ràng buộc & Giả định (Assumptions)
- **Hiệu năng & Quy mô**: Hệ thống được thiết kế ở mức độ đồ án/demo. Tần suất cập nhật vị trí trên mobile sẽ được điều chỉnh linh hoạt (adaptive) để tối ưu hóa năng lượng và băng thông.
- **Bảo mật & Quyền riêng tư**: 
  - Vị trí realtime chỉ được lưu tạm thời trên Redis (có TTL ngắn).
  - Không lưu trữ lịch sử đường đi dài hạn trong cơ sở dữ liệu.
  - Sử dụng JWT/Google OAuth để xác thực.
- **Triển khai**: Backend và Database (PostgreSQL + PostGIS, Redis) có thể được đóng gói và chạy dễ dàng bằng Docker (dùng `docker-compose.yml` cho môi trường local).

## 3. Thiết kế Cấu trúc (Final Design)

### 3.1. Repository Structure
Dự án được chia thành 2 thư mục riêng biệt nằm trong cùng một repository:
- `/mobile`: Mã nguồn ứng dụng di động.
- `/backend`: Mã nguồn server.

### 3.2. Cấu trúc thư mục Mobile (Expo Router + Zustand)
- `app/`: Quản lý các màn hình (screens) theo cơ chế file-based routing của Expo Router.
- `components/`: Các UI components dùng chung (Buttons, Inputs, Custom Map Markers...).
- `services/`: Quản lý kết nối API (Axios) và Socket.IO client.
- `store/`: Quản lý global state sử dụng Zustand (VD: UserStore, LocationStore).
- `types/`: Các khai báo interface của TypeScript.

### 3.3. Cấu trúc thư mục Backend (NestJS + TypeORM)
- `src/modules/`: 
  - `auth/` & `users/`: Xử lý đăng ký, đăng nhập và quản lý danh sách bạn bè.
  - `location/`: Socket.IO Gateway để broadcast vị trí của người dùng.
  - `meetups/`: Xử lý logic tạo nhóm, kết nối Google Places/Routes API để lấy đề xuất địa điểm.
- `src/config/`: File cấu hình kết nối DB, Redis, Auth.
- `docker-compose.yml`: File khởi tạo Database PostgreSQL (kèm extension PostGIS) và Redis.

## 4. Nhật ký Quyết định (Decision Log)

### Quyết định 1: Cấu trúc Repository
- **Được chọn**: Cấu trúc thư mục đơn giản (`mobile` và `backend` riêng biệt).
- **Thay thế đã xem xét**: Monorepo (Nx hoặc Turborepo).
- **Lý do**: Cấu trúc đơn giản, dễ tiếp cận, dễ deploy độc lập (Vercel/Render cho backend, EAS cho Expo) mà không cần cấu hình CI/CD phức tạp của monorepo. Phù hợp với tính chất của đồ án.

### Quyết định 2: Mobile Stack
- **Được chọn**: Expo Router + Zustand.
- **Thay thế đã xem xét**: React Navigation + Redux Toolkit.
- **Lý do**: Expo Router mang lại trải nghiệm routing hiện đại, tương tự Next.js, giúp giảm boilerplate code. Zustand nhẹ hơn Redux nhiều nhưng vẫn cung cấp đầy đủ chức năng quản lý state toàn cục.

### Quyết định 3: Backend Stack & Database ORM
- **Được chọn**: NestJS + TypeORM (với PostgreSQL/PostGIS).
- **Thay thế đã xem xét**: NestJS + Prisma.
- **Lý do**: TypeORM hỗ trợ kiểu dữ liệu Geometry và PostGIS tốt hơn nhiều so với Prisma. Do dự án phụ thuộc nhiều vào dữ liệu không gian (tọa độ, khoảng cách, bán kính), TypeORM là lựa chọn an toàn và dễ triển khai nhất.
