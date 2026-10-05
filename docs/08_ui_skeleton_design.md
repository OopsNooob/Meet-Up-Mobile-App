# Thiết kế Sườn Giao Diện (UI Skeleton) - MeetUp Mobile App

## 1. Tóm tắt sự hiểu biết (Understanding Summary)
- **Sản phẩm:** Bộ khung sườn giao diện (UI skeleton & navigation structure) cho ứng dụng di động MeetUp.
- **Mục tiêu:** Tạo cấu trúc thư mục và luồng điều hướng (routing) chuẩn chỉ ngay từ đầu, giúp 2 Frontend Dev (bạn và Việt) có thể chia task và code song song (parallel) dễ dàng.
- **Đối tượng:** Đội ngũ Frontend và người dùng cuối.
- **Ràng buộc (Constraints):** Đáp ứng các Use Case cốt lõi, sử dụng kiến trúc `expo-router` (file-based routing), `zustand` quản lý state và `socket.io-client` cho realtime.
- **Phạm vi (Non-goals):** Chỉ tạo khung sườn (routing, file layout, component placeholders), chưa code logic hay style hoàn thiện.

## 2. Các giả định (Assumptions)
- Dự án ưu tiên tốc độ phát triển và kiểm soát giao diện dễ dàng, nên việc cài đặt thêm các thư viện chuẩn (như NativeWind, i18next) là cần thiết và được chấp thuận.
- Cấu trúc Global-based phù hợp nhất với quy mô team 2 người, giúp tái sử dụng component tốt hơn.
- Luồng điều hướng chính sau đăng nhập là Bottom Tab Navigator.

## 3. Nhật ký quyết định (Decision Log)
### Quyết định 1: Lựa chọn UI Framework & Styling
- **Quyết định:** Sử dụng **NativeWind (Tailwind CSS cho React Native)** kết hợp **i18next** (Đa ngôn ngữ).
- **Các phương án thay thế:** Tamagui (UI Kit), Thuần StyleSheet.
- **Lý do chọn:** Dễ học, viết UI nhanh chóng, hỗ trợ xử lý Dark Mode cực kỳ tiện lợi thông qua class `dark:`. Phù hợp với frontend dev đã quen Tailwind.

### Quyết định 2: Tổ chức thư mục
- **Quyết định:** Sử dụng kiến trúc **Global-based**.
- **Các phương án thay thế:** Feature-based.
- **Lý do chọn:** Dễ quản lý các component dùng chung (Nút, Input, Modal...) và state toàn cục, tránh việc lặp lại code ở các thư mục tính năng khác nhau.

### Quyết định 3: Thiết kế Tabs Điều hướng
- **Quyết định:** Bottom Navigator gồm 4 tabs chính: Bản đồ, Meetup, Bạn bè, Profile.
- **Lý do chọn:** Bao quát toàn bộ các use-case cốt lõi nhất được liệt kê trong tài liệu đặc tả nghiệp vụ.

## 4. Kiến trúc thư mục (Final Design)

```text
/app
  _layout.tsx           # Chứa các Provider: Theme, i18n, AuthState, Socket
  /(auth)               # Nhóm màn hình chưa đăng nhập
    login.tsx           # Màn hình đăng nhập (Email / Google)
  /(tabs)               # Nhóm màn hình chính (Bottom Tabs)
    _layout.tsx         # Cấu hình Bottom Tab Navigator
    index.tsx           # Tab 1: Bản đồ (Xem bạn bè / Nearby) - Trang chủ
    meetups.tsx         # Tab 2: Quản lý Meetup (Tạo, xem list, vote)
    friends.tsx         # Tab 3: Danh sách bạn bè & Lời mời
    profile.tsx         # Tab 4: Hồ sơ, Cài đặt (Dark Mode, Ngôn ngữ, Vị trí)

/components             # Dùng chung toàn app
  /ui                   # Nút bấm, Input, Modal, Typography...
  /meetup               # Component đặc thù cho meetup (VoteCard, PlaceItem...)
  /map                  # Marker, Overlay cho bản đồ

/locales                # File ngôn ngữ (i18next)
  vi.json
  en.json

/store                  # Global State (Zustand)
  useAuthStore.ts       # Lưu thông tin User, Token
  useMeetupStore.ts     # Lưu danh sách meetup, trạng thái vote
  useAppStore.ts        # Lưu theme (dark/light), ngôn ngữ

/hooks                  # Custom Hooks
  useSocket.ts          # Kết nối realtime socket.io
  useLocation.ts        # Quản lý xin quyền GPS & gửi vị trí
```
