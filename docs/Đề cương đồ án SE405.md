# ĐỀ CƯƠNG CHI TIẾT

**TÊN TIẾNG VIỆT:** Xây dựng ứng dụng di động kết nối bạn bè và gợi ý địa điểm gặp mặt dựa trên vị trí thời gian thực.

**TÊN TIẾNG ANH:** Developing a Real-Time Location-Based Friend Meetup and Place Recommendation Application.

# 1. Lý do chọn đề tài

- **Khó khăn trong việc lựa chọn địa điểm gặp mặt:** Khi một nhóm bạn đang ở nhiều vị trí khác nhau, việc lựa chọn quán ăn, quán cà phê hoặc địa điểm vui chơi thuận tiện cho tất cả mọi người thường mất nhiều thời gian. Các ứng dụng bản đồ hiện nay chủ yếu tìm địa điểm gần một cá nhân, chưa trực tiếp giải quyết bài toán lựa chọn địa điểm phù hợp cho cả nhóm.

- **Nhu cầu kết nối dựa trên ngữ cảnh vị trí:** Vị trí hiện tại của người dùng là một dạng context quan trọng trong Pervasive và Mobile Computing. Nếu khai thác vị trí của các thành viên theo thời gian thực, hệ thống có thể hỗ trợ người dùng đưa ra quyết định phù hợp với hoàn cảnh thực tế thay vì yêu cầu họ tự nhập vị trí.

- **Bài toán đề xuất địa điểm cho nhiều người:** Địa điểm tốt nhất không nhất thiết là địa điểm gần một người nhất. Hệ thống cần xem xét vị trí của tất cả thành viên, thời gian di chuyển, loại hình vui chơi, mức giá và sở thích để tìm ra những địa điểm phù hợp và tương đối công bằng cho cả nhóm.

- **Thách thức về real-time, quyền riêng tư và năng lượng:** Việc cập nhật vị trí liên tục đòi hỏi cân bằng giữa độ chính xác, độ trễ, pin thiết bị và quyền riêng tư của người dùng. Đây là bài toán có tính thực tiễn cao trong phát triển ứng dụng mobile hiện đại.

# 2. Mục tiêu

- **Phát triển ứng dụng di động đa nền tảng:** Xây dựng ứng dụng React Native hỗ trợ Android, cho phép người dùng kết bạn, chia sẻ vị trí và quan sát vị trí những người bạn đã cấp quyền trên bản đồ.

- **Xây dựng hệ thống chia sẻ vị trí thời gian thực:** Thiết bị gửi các bản cập nhật vị trí lên backend; các thay đổi được đồng bộ tới những người dùng có quyền xem thông qua Socket.IO.

- **Xây dựng chức năng tạo nhóm đi chơi:** Người dùng lựa chọn một số bạn bè, tạo một phiên gặp mặt và yêu cầu hệ thống tìm địa điểm phù hợp cho nhóm.

- **Xây dựng thuật toán gợi ý địa điểm:** Hệ thống sử dụng vị trí hiện tại của các thành viên để xác định khu vực gặp mặt hợp lý, tìm các địa điểm như nhà hàng, quán cà phê, trung tâm thương mại hoặc khu vui chơi và xếp hạng các địa điểm dựa trên thời gian di chuyển và nhu cầu của nhóm.

- **Xây dựng chức năng bình chọn và mời tham gia:** Các thành viên có thể xem danh sách địa điểm đề xuất, bình chọn địa điểm và xác nhận tham gia kế hoạch.

- **Đảm bảo quyền riêng tư vị trí:** Người dùng có quyền bật/tắt chia sẻ vị trí, giới hạn người được xem, chia sẻ vị trí trong một khoảng thời gian hoặc chỉ chia sẻ khi tham gia một kế hoạch.

- **Tối ưu hiệu năng và năng lượng:** Điều chỉnh tần suất cập nhật vị trí phù hợp nhằm hạn chế tiêu hao pin và lượng dữ liệu truyền qua mạng.

# 3. Phạm vi

Hệ thống tập trung vào **ứng dụng Mobile và Backend**, với chức năng quản trị ở mức tối thiểu.

## 3.1. Người dùng

Người dùng có thể:

- Đăng ký, đăng nhập bằng Email hoặc tài khoản Google.

- Tìm kiếm và gửi lời mời kết bạn.

- Chấp nhận hoặc từ chối lời mời kết bạn.

- Xem danh sách bạn bè.

- Bật hoặc tắt chia sẻ vị trí.

- Chọn người hoặc nhóm bạn được phép xem vị trí.

- Xem vị trí hiện tại hoặc vị trí cập nhật gần nhất của bạn bè trên bản đồ.

- Xem thời gian cập nhật vị trí gần nhất.

- Tạo một **Hangout / Meetup Session**.

- Chọn những người bạn muốn rủ đi chơi.

- Chọn nhu cầu:

  - Ăn uống.

  - Cà phê.

  - Xem phim.

  - Trung tâm thương mại.

  - Công viên.

  - Giải trí.

- Chọn mức ngân sách mong muốn.

- Chọn bán kính tìm kiếm.

- Nhận danh sách địa điểm được hệ thống đề xuất.

- Xem:

  - Tên địa điểm.

  - Khoảng cách.

  - Thời gian di chuyển.

  - Rating.

  - Mức giá nếu có.

  - Trạng thái đang mở cửa.

- Bình chọn địa điểm.

- Xác nhận hoặc từ chối lời mời đi chơi.

- Nhận push notification khi:

  - Có lời mời kết bạn.

  - Có lời mời tham gia meetup.

  - Có địa điểm được chọn.

  - Kế hoạch sắp bắt đầu.

- Mở Google Maps để dẫn đường tới địa điểm đã chọn.

- Xem lại các kế hoạch trước đó và lưu địa điểm yêu thích.

## 3.2. Quyền riêng tư vị trí

Hệ thống không mặc định cho phép tất cả bạn bè theo dõi vị trí liên tục.

Người dùng có thể lựa chọn:

- **Không chia sẻ.**

- **Chỉ chia sẻ khi đang dùng ứng dụng.**

- **Chia sẻ trong Meetup Session.**

- **Chia sẻ trong khoảng thời gian giới hạn**, ví dụ 1 giờ.

- **Chia sẻ vị trí gần đúng** thay vì tọa độ chính xác.

Thông tin vị trí hiện tại được ưu tiên lưu dưới dạng dữ liệu tạm thời có TTL thay vì xây dựng lịch sử theo dõi vị trí dài hạn.

## 3.3. Quản trị viên

Web Admin tối giản có thể hỗ trợ:

- Quản lý tài khoản.

- Khóa tài khoản vi phạm.

- Tiếp nhận báo cáo người dùng.

- Theo dõi số lượng người dùng và meetup.

- Theo dõi trạng thái các dịch vụ backend.

Phần Admin không phải trọng tâm của đề tài.

# 4. Phương pháp thực hiện

## 4.1. Thu thập vị trí trên thiết bị

Ứng dụng sử dụng **Expo Location** để lấy GPS từ smartphone.

Expo Location hỗ trợ đọc vị trí hiện tại và subscribe các sự kiện cập nhật vị trí. Expo cũng hỗ trợ background location nhưng yêu cầu quyền tương ứng của hệ điều hành.

Luồng cơ bản:

Smartphone GPS

↓

expo-location

↓

Location Update

↓

Socket.IO

↓

Backend

Để tránh hao pin, ứng dụng không nhất thiết cập nhật GPS mỗi giây.

Ví dụ:

User đứng yên

→ cập nhật ít hơn

User đang di chuyển

→ cập nhật thường xuyên hơn

User tham gia Meetup

→ tăng tần suất cập nhật

Có thể kết hợp:

- Khoảng thời gian tối thiểu.

- Khoảng cách di chuyển tối thiểu.

- Trạng thái foreground/background.

## 4.2. Đồng bộ vị trí thời gian thực

Mobile gửi event:

location:update

{

latitude,

longitude,

timestamp

}

Backend:

1.  Xác thực người gửi.

2.  Kiểm tra quyền chia sẻ.

3.  Cập nhật vị trí mới nhất.

4.  Broadcast vị trí tới những user được phép xem.

Kiến trúc:

User A

↓ location:update

Socket.IO

↓

Backend

↓

Redis

↓

Socket.IO Room

↓

User B / User C

Mỗi meetup hoặc nhóm có thể tương ứng với một **Socket.IO Room**.

Khi hệ thống triển khai nhiều backend server, **Socket.IO Redis Adapter** có thể sử dụng Redis Pub/Sub để truyền các packet giữa các Socket.IO server.

## 4.3. Lưu trữ dữ liệu vị trí

Đề xuất sử dụng:

**PostgreSQL + PostGIS**

cho các dữ liệu cần lưu lâu dài:

User

Friendship

Meetup

MeetupMember

Vote

FavoritePlace

PrivacySetting

**Redis**

cho:

Current Location

Online Presence

Active Meetup State

Temporary Cache

Socket State

Ví dụ:

location:user_123

lat = ...

lng = ...

updatedAt = ...

TTL = 5 phút

Cách này giúp hạn chế việc lưu lịch sử vị trí không cần thiết.

PostGIS được sử dụng cho các phép toán không gian; ví dụ ST_DWithin có thể xác định những đối tượng nằm trong một bán kính nhất định và hỗ trợ sử dụng spatial index.

# 4.4. Thuật toán gợi ý địa điểm

Giả sử một nhóm có:

User A → Location A

User B → Location B

User C → Location C

User D → Location D

## Bước 1 — Xác định khu vực gặp mặt ban đầu

Phiên bản cơ bản có thể sử dụng:

Group Center = trung tâm của các vị trí thành viên

Phiên bản tốt hơn sử dụng **Geometric Median** nhằm tìm điểm giảm tổng khoảng cách giữa các thành viên.

Ví dụ:

A

★ center

B C

D

Điểm ★ chưa phải địa điểm gặp mặt.

Nó chỉ được sử dụng làm vùng tìm kiếm.

## Bước 2 — Tìm các địa điểm ứng viên

Backend gọi **Google Places Nearby Search** quanh vùng trung tâm.

Nearby Search cho phép tìm địa điểm theo vị trí, loại địa điểm và có thể sắp xếp kết quả theo khoảng cách hoặc popularity.

Ví dụ:

Group muốn:

restaurant + cafe

Search radius:

2 km

Hệ thống thu được:

Place A

Place B

Place C

Place D

...

Places API còn có các thông tin như rating, giờ hoạt động và mức giá tùy FieldMask/SKU được yêu cầu.

## Bước 3 — Tính thời gian di chuyển của từng thành viên

Không nên chỉ dùng khoảng cách đường chim bay.

Backend sử dụng **Google Routes API – ComputeRouteMatrix**:

Origins:

A

B

C

D

Destinations:

Place 1

Place 2

Place 3

...

Routes API trả về distance và duration cho từng cặp origin–destination.

Ví dụ:

| **Place** | **A** | **B** | **C** | **D** |
|-----------|-------|-------|-------|-------|
| Cafe X    | 8m    | 10m   | 12m   | 9m    |
| Cafe Y    | 3m    | 5m    | 26m   | 6m    |
| Cafe Z    | 11m   | 12m   | 10m   | 12m   |

Mặc dù Cafe Y rất gần ba người nhưng C phải đi 26 phút.

Cafe X có thể công bằng hơn.

## Bước 4 — Xếp hạng địa điểm

Có thể xây dựng điểm:

Score(p)=w1AvgTime(p)+w2MaxTime(p)+w3PreferencePenalty(p)+w4PricePenalty(p)−w5Rating(p)Score(p)= w_1 AvgTime(p) + w_2 MaxTime(p) + w_3 PreferencePenalty(p) + w_4 PricePenalty(p) - w_5 Rating(p)

Trong đó:

- AvgTime: thời gian di chuyển trung bình.

- MaxTime: thời gian dài nhất của một thành viên.

- PreferencePenalty: địa điểm không phù hợp sở thích nhóm.

- PricePenalty: mức giá không phù hợp ngân sách.

- Rating: điểm đánh giá.

MaxTime được đưa vào để tránh trường hợp:

> ba người rất gần nhưng một người phải đi quá xa.

Kết quả:

1\. The Coffee House A

Group score: 92

Avg travel: 9 min

2\. Restaurant B

Group score: 86

Avg travel: 11 min

3\. Mall C

Group score: 81

Avg travel: 13 min

## Bước 5 — Bình chọn

Thuật toán chỉ **đề xuất**, quyết định cuối cùng thuộc về nhóm.

Recommended Places

↓

Group Voting

↓

Selected Place

↓

Notify Members

Điều này giúp hệ thống không phụ thuộc hoàn toàn vào thuật toán recommendation.

# 4.5. Notification

Sử dụng **Firebase Cloud Messaging – FCM**.

FCM hỗ trợ gửi notification hoặc data message tới Android.

Các notification chính:

Friend Request

Meetup Invitation

Vote Reminder

Place Selected

Meetup Starting Soon

# 4.6. Quy trình phát triển

Áp dụng Agile/Scrum theo sprint:

1.  Phân tích yêu cầu.

2.  Thiết kế Use Case và database.

3.  Thiết kế UI/UX.

4.  Xây dựng Authentication và Friendship.

5.  Tích hợp Maps và Location.

6.  Xây dựng Realtime Location.

7.  Xây dựng Meetup.

8.  Xây dựng Recommendation Engine.

9.  Tích hợp Google Places và Routes.

10. Tích hợp Notification.

11. Kiểm thử.

12. Deployment và demo.

# 5. Nền tảng công nghệ

## Mobile

- **React Native**

- **Expo**

- **TypeScript**

- **Expo Location**

- **React Native Maps**

- **Socket.IO Client**

- **TanStack Query**

- **Zustand** hoặc Redux Toolkit

## Backend

- **Node.js**

- **NestJS**

- **REST API**

- **Socket.IO**

REST API sử dụng cho:

Authentication

Friendship

Meetup

Search

Vote

Profile

Socket.IO sử dụng cho:

Location Update

Friend Location Update

Meetup Realtime State

Voting Update

Presence

## Database

- **PostgreSQL**

- **PostGIS**

Dùng để lưu:

Users

Friends

Meetups

Meetup Members

Votes

Preferences

Places

## Cache & Realtime Infrastructure

- **Redis**

- **Socket.IO Redis Adapter**

Redis lưu:

Current location

Online status

Temporary meetup state

Cache

## Map & Recommendation Data

- **Google Maps Platform**

- **Places API (New)**

- **Routes API**

Google Places Nearby Search được dùng để lấy danh sách POI gần vùng tìm kiếm.

Compute Route Matrix được dùng để so sánh thời gian di chuyển của nhiều thành viên tới nhiều địa điểm.

## Notification

- **Firebase Cloud Messaging**

## Authentication

- JWT.

- Google OAuth.

- Refresh Token.

## Testing

- Jest.

- Supertest.

- k6.

- Postman.

## DevOps

- Docker.

- GitHub.

- GitHub Actions.

## Thiết kế

- Figma.

# 6. Kiến trúc hệ thống

┌───────────────────────────────────────┐

│ React Native Mobile App │

│ │

│ Maps / Friends / Meetup / Places │

└───────────┬─────────────────┬─────────┘

│ │

REST API Socket.IO

│ │

└────────┬────────┘

▼

┌──────────────┐

│ NestJS │

│ Backend │

└──────┬───────┘

│

┌─────────────┼─────────────┐

│ │ │

▼ ▼ ▼

PostgreSQL Redis Google APIs

\+ PostGIS Places

Routes

│

│

└──────────────┐

▼

FCM

Push Notification

# 7. Các chức năng chính đề xuất

## MUST HAVE – bắt buộc

1.  Authentication.

2.  Add Friend.

3.  Location Permission.

4.  Share/Stop Sharing Location.

5.  Realtime Friend Map.

6.  Create Meetup.

7.  Chọn thành viên.

8.  Chọn loại địa điểm.

9.  Recommendation Algorithm.

10. Google Places Integration.

11. Bình chọn địa điểm.

12. Push Notification.

## SHOULD HAVE – nên có

13. Budget filter.

14. Open-now filter.

15. Favorite Places.

16. Meetup History.

17. Share location theo thời gian giới hạn.

18. Hiển thị ETA của từng thành viên.

19. Deep link sang Google Maps để navigation.

20. Group chat trong mỗi Meetup.

21. AI giải thích tại sao địa điểm được đề xuất. (chỉ những ai bật vị trí)

22. Tự động phát hiện bạn bè đang ở gần.

## NICE TO HAVE – nếu còn thời gian

23. Recommendation theo lịch sử người dùng.

24. Tạo meetup bằng giọng nói.

25. Weather-aware recommendation.

# 8. Kết quả mong đợi

- Ứng dụng React Native chạy ổn định trên Android.

- Người dùng đăng ký, kết bạn và quản lý quyền chia sẻ vị trí.

- Vị trí của bạn bè được đồng bộ gần thời gian thực.

- Bản đồ hiển thị được vị trí hiện tại và thời gian cập nhật gần nhất.

- Người dùng tạo được một Meetup Session.

- Hệ thống thu thập vị trí các thành viên và xác định khu vực gặp mặt phù hợp.

- Places API trả về các nhà hàng, quán cà phê hoặc địa điểm vui chơi phù hợp.

- Recommendation Engine xếp hạng địa điểm dựa trên thời gian di chuyển và các tiêu chí nhóm.

- Thành viên có thể vote và lựa chọn địa điểm.

- Các thành viên nhận được notification về meetup.

- Hệ thống đảm bảo người không có quyền không thể xem vị trí của người dùng.

- Realtime backend có khả năng chịu tải ở mức phù hợp với sản phẩm demo.

- Hệ thống được đóng gói bằng Docker và triển khai trên môi trường Cloud.

# 9. Kế hoạch thực hiện

| **Giai đoạn**  | **Thời gian đề xuất** | **Công việc**                            | **Kết quả**           |
|----------------|-----------------------|------------------------------------------|-----------------------|
| Lên kế hoạch   | Tuần 1                | Xác định phạm vi, chức năng và công nghệ | Product Backlog       |
| Phân tích      | Tuần 2                | Use Case, SRS, flow chia sẻ vị trí       | Tài liệu yêu cầu      |
| Thiết kế       | Tuần 3                | Database, System Architecture, Figma     | System Design         |
| Core App       | Tuần 4–5              | Authentication, Profile, Friend          | Module User           |
| Location       | Tuần 6                | Maps, GPS, Location Permission           | Friend Map            |
| Realtime       | Tuần 7                | Socket.IO, Redis, realtime location      | Location Sync         |
| Meetup         | Tuần 8                | Tạo nhóm, invite, vote                   | Meetup Module         |
| Recommendation | Tuần 9–10             | Places, Routes, scoring algorithm        | Recommendation Engine |
| Notification   | Tuần 10               | FCM                                      | Notification Module   |
| Testing        | Tuần 11               | Unit, Integration, Load Test             | Stable Release        |
| Deployment     | Tuần 12               | Docker, CI/CD, Cloud                     | Demo Production       |

# 10. Hướng phát triển

- **Recommendation cá nhân hóa:** Học từ lịch sử địa điểm, sở thích, mức giá và hành vi vote của từng thành viên.

- **AI Recommendation:** Sử dụng mô hình AI để hiểu yêu cầu tự nhiên như: “Tụi mình muốn tìm quán ăn Hàn dưới 200k, không quá 20 phút cho mỗi người”.

- **Traffic-aware Recommendation:** Sử dụng tình trạng giao thông hiện tại để điều chỉnh recommendation theo ETA thực tế thay vì khoảng cách.

- **Public Transport Recommendation:** Xem xét metro, bus và các phương tiện công cộng.

- **Weather-aware Recommendation:** Ưu tiên địa điểm trong nhà khi trời mưa hoặc địa điểm ngoài trời khi thời tiết thuận lợi.

- **Smart Meetup Prediction:** Khi nhiều người bạn đang ở gần nhau, ứng dụng có thể gợi ý tạo meetup, nhưng chỉ khi người dùng bật tính năng này.

- **Advanced Privacy:** Hỗ trợ vị trí gần đúng, delayed location, invisible mode và end-to-end encrypted location sharing.

- **Mở rộng recommendation:** Ngoài ăn uống và giải trí, có thể áp dụng cho học nhóm, coworking, du lịch và tổ chức sự kiện.

Có hai quyết định kỹ thuật khuyên giữ:

Thứ nhất, **đừng lưu toàn bộ lịch sử GPS ngay từ đầu**. Với app kiểu này, vị trí là dữ liệu nhạy cảm; thiết kế tốt hơn cho MVP là giữ **latest location trong Redis có TTL**, còn PostgreSQL chỉ lưu friendship, quyền chia sẻ, meetup và vote. Expo cũng cho phép app subscribe location update và background location nhưng hành vi background phụ thuộc permission/hệ điều hành, nên nên thiết kế chế độ “share during meetup” thay vì mặc định theo dõi 24/7.

Bản MVP dùng **trung tâm nhóm + Haversine + Places Nearby Search** để làm nhanh. Bản hoàn chỉnh mới dùng **Places + Compute Route Matrix**, vì Route Matrix thực sự tính được distance/duration giữa nhiều thành viên và nhiều địa điểm; đây sẽ là phần kỹ thuật làm đề tài của nhóm nổi bật hơn một app “show friends on map” thông thường.

https://chatgpt.com/share/6aaca9c5-f4dc-83ec-9f69-09fb1ba20bce
