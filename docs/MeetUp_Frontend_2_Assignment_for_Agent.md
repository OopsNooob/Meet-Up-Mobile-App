# MeetUp — Frontend 2 Assignment

> Tài liệu này được tách riêng từ workbook `MeetUp_Frontend_Assignment(1).xlsx` để dùng làm context cho agent trong IDE.
> **Phạm vi chỉ tập trung vào Frontend 2.** Không tự mở rộng sang phần việc thuộc Frontend 1 trừ khi cần tích hợp/review.

## 1. Vai trò Frontend 2

- **Vai trò:** GPS, map, realtime và tích hợp ngoài.
- **Tổng điểm:** 81 / 162 điểm FE.
- **Tỷ lệ:** 50%.
- **Mảng phụ trách:** GPS permission, friend map, Socket client, recommendation/ETA, Places, FCM/deep link, chat, AI explanation, nearby, mobile performance.
- **Trách nhiệm chính:** UI, state management, tích hợp API/event, test luồng chính và demo cho các chức năng được giao.

### Không thuộc phạm vi chính của Frontend 2

Các phần sau thuộc Frontend 1 trong workbook:
- Account / authentication / profile.
- Friendship.
- Tạo/sửa/hủy meetup và nghiệp vụ meetup chính.
- Preference profile/meetup.
- Vote và chốt địa điểm.
- History / favorite / navigation.
- Admin tối giản.
- App shell / navigation / component dùng chung.
- Error/offline/privacy state dùng chung.

Frontend 2 chỉ cần phối hợp để tích hợp các phần phụ thuộc, không nhận ownership các hạng mục trên.

---

## 2. Danh sách công việc Frontend 2

| Mã | Chức năng | Phạm vi | Điểm | Sprint | Phụ thuộc |
|---|---|---|---:|---|---|
| FE-04 | Quyền GPS và cài đặt chia sẻ vị trí | Core | 8 | S2 | FE-01 |
| FE-05 | Bản đồ bạn bè realtime | Core | 13 | S2 | FE-04 |
| FE-06 | Socket client và vòng đời location | Core | 8 | S2 | FE-01, FE-04 |
| FE-10 | Kết quả gợi ý địa điểm | Core | 13 | S4 | FE-05, FE-07, FE-09 |
| FE-11 | Chi tiết địa điểm và lọc đang mở cửa | Planned | 5 | S5 | FE-10 |
| FE-13 | FCM, nhắc lịch và deep link | Core | 8 | S5 | FE-07, FE-12 |
| FE-15 | Chat nhóm trong Meetup | Planned | 8 | S6 | FE-06, FE-07 |
| FE-16 | AI giải thích đề xuất | Planned | 5 | S6 | FE-10 |
| FE-17 | Phát hiện bạn ở gần | Planned | 5 | S6 | FE-04, FE-05, FE-13 |
| FE-20 | Hiệu năng mobile và chuẩn bị demo | Core | 8 | S7 | FE-05, FE-06, FE-10 |

**Tổng: 81 điểm.**

---

## 3. Chi tiết từng task

### FE-04 — Quyền GPS và cài đặt chia sẻ vị trí

- **Phạm vi:** Core
- **Điểm FE:** 8
- **Sprint:** S2
- **Phụ thuộc:** FE-01
- **UI / State / Integration:** Xin quyền hệ điều hành, bật/tắt chia sẻ, giải thích khi từ chối/tắt GPS
- **Tiêu chí hoàn thành:** Có retry; UI phản ánh chính xác trạng thái quyền/chia sẻ

### FE-05 — Bản đồ bạn bè realtime

- **Phạm vi:** Core
- **Điểm FE:** 13
- **Sprint:** S2
- **Phụ thuộc:** FE-04
- **UI / State / Integration:** Map, marker bạn bè, updatedAt, accuracy, nhãn vị trí cũ
- **Tiêu chí hoàn thành:** Vị trí >5 phút hiển thị cũ; marker cập nhật gần realtime

### FE-06 — Socket client và vòng đời location

- **Phạm vi:** Core
- **Điểm FE:** 8
- **Sprint:** S2
- **Phụ thuộc:** FE-01, FE-04
- **UI / State / Integration:** Kết nối Socket.IO, reconnect, presence, subscribe/unsubscribe event vị trí/meetup
- **Tiêu chí hoàn thành:** Mất mạng/reconnect không nhân đôi listener; chỉ hiển thị event hợp lệ

### FE-10 — Kết quả gợi ý địa điểm

- **Phạm vi:** Core
- **Điểm FE:** 13
- **Sprint:** S4
- **Phụ thuộc:** FE-05, FE-07, FE-09
- **UI / State / Integration:** Top 5, rating, Avg ETA, Max ETA, ETA từng người, nhãn exact/batch/cluster
- **Tiêu chí hoàn thành:** Thiếu vị trí hiển thị rõ; kết quả theo quy mô được gắn nhãn đúng

### FE-11 — Chi tiết địa điểm và lọc đang mở cửa

- **Phạm vi:** Planned
- **Điểm FE:** 5
- **Sprint:** S5
- **Phụ thuộc:** FE-10
- **UI / State / Integration:** Place card/detail, trạng thái giờ mở cửa, bật/tắt lọc open-now
- **Tiêu chí hoàn thành:** Nếu Places thiếu giờ mở phải hiện 'chưa có dữ liệu', không tự suy đoán

### FE-13 — FCM, nhắc lịch và deep link

- **Phạm vi:** Core
- **Điểm FE:** 8
- **Sprint:** S5
- **Phụ thuộc:** FE-07, FE-12
- **UI / State / Integration:** Nhận notification lời mời/chốt/nhắc lịch; chạm mở đúng màn hình
- **Tiêu chí hoàn thành:** Notification điều hướng đúng meetup; xử lý app foreground/background

### FE-15 — Chat nhóm trong Meetup

- **Phạm vi:** Planned
- **Điểm FE:** 8
- **Sprint:** S6
- **Phụ thuộc:** FE-06, FE-07
- **UI / State / Integration:** Danh sách tin, gửi/nhận realtime, trạng thái gửi/lỗi/reconnect
- **Tiêu chí hoàn thành:** Chỉ thành viên hợp lệ đọc/gửi; UI báo lỗi khi mất mạng

### FE-16 — AI giải thích đề xuất

- **Phạm vi:** Planned
- **Điểm FE:** 5
- **Sprint:** S6
- **Phụ thuộc:** FE-10
- **UI / State / Integration:** Nút 'Vì sao gợi ý?', modal/card giải thích, fallback theo rule khi AI lỗi
- **Tiêu chí hoàn thành:** Không hiển thị dữ liệu nhạy cảm; timeout dùng lý do fallback

### FE-17 — Phát hiện bạn ở gần

- **Phạm vi:** Planned
- **Điểm FE:** 5
- **Sprint:** S6
- **Phụ thuộc:** FE-04, FE-05, FE-13
- **UI / State / Integration:** Opt-in, chọn ngưỡng, notification/gợi ý tạo meetup, trạng thái cooldown
- **Tiêu chí hoàn thành:** Chỉ gợi ý khi opt-in; không lộ vị trí chính xác

### FE-20 — Hiệu năng mobile và chuẩn bị demo

- **Phạm vi:** Core
- **Điểm FE:** 8
- **Sprint:** S7
- **Phụ thuộc:** FE-05, FE-06, FE-10
- **UI / State / Integration:** Theo dõi loading/re-render, số update vị trí, polish luồng demo, kiểm tra Android thật
- **Tiêu chí hoàn thành:** Demo ổn định; có số liệu update/độ trễ cần thiết cho phần kiểm thử

---

## 4. Function Points của Frontend 2

| Mã | Chức năng | UI / Flow | API / State | Realtime / Device | Điểm |
|---|---|---|---|---|---:|
| FE-04 | Quyền GPS và cài đặt chia sẻ vị trí | Vừa | Vừa | GPS | 8 |
| FE-05 | Bản đồ bạn bè realtime | Nhiều | Nhiều | Map + Realtime | 13 |
| FE-06 | Socket client và vòng đời location | Ít | Nhiều | Socket | 8 |
| FE-10 | Kết quả gợi ý địa điểm | Nhiều | Nhiều | Map/Routes state | 13 |
| FE-11 | Chi tiết địa điểm và lọc đang mở cửa | Vừa | Vừa | Places | 5 |
| FE-13 | FCM, nhắc lịch và deep link | Vừa | Nhiều | FCM/Deep link | 8 |
| FE-15 | Chat nhóm trong Meetup | Nhiều | Nhiều | Socket | 8 |
| FE-16 | AI giải thích đề xuất | Vừa | Vừa | AI API | 5 |
| FE-17 | Phát hiện bạn ở gần | Vừa | Vừa | Location + FCM | 5 |
| FE-20 | Hiệu năng mobile và chuẩn bị demo | Vừa | Vừa | Device/performance | 8 |

Tổng Function Points của Frontend 2: **81**.

---

## 5. Backlog cần thực hiện

Chỉ lấy các item có `Phụ trách = Frontend 2`:

| Mã | Hạng mục | Phạm vi | Điểm | Sprint | Trạng thái ban đầu | Phụ thuộc | Ghi chú |
|---|---|---|---:|---|---|---|---|
| FE-04 | Quyền GPS và cài đặt chia sẻ vị trí | Core | 8 | S2 | Sẵn sàng | FE-01 | Có retry; UI phản ánh chính xác trạng thái quyền/chia sẻ |
| FE-05 | Bản đồ bạn bè realtime | Core | 13 | S2 | Sẵn sàng | FE-04 | Vị trí >5 phút hiển thị cũ; marker cập nhật gần realtime |
| FE-06 | Socket client và vòng đời location | Core | 8 | S2 | Sẵn sàng | FE-01, FE-04 | Mất mạng/reconnect không nhân đôi listener; chỉ hiển thị event hợp lệ |
| FE-10 | Kết quả gợi ý địa điểm | Core | 13 | S4 | Sẵn sàng | FE-05, FE-07, FE-09 | Thiếu vị trí hiển thị rõ; kết quả theo quy mô được gắn nhãn đúng |
| FE-11 | Chi tiết địa điểm và lọc đang mở cửa | Planned | 5 | S5 | Sẵn sàng | FE-10 | Nếu Places thiếu giờ mở phải hiện 'chưa có dữ liệu', không tự suy đoán |
| FE-13 | FCM, nhắc lịch và deep link | Core | 8 | S5 | Sẵn sàng | FE-07, FE-12 | Notification điều hướng đúng meetup; xử lý app foreground/background |
| FE-15 | Chat nhóm trong Meetup | Planned | 8 | S6 | Sẵn sàng | FE-06, FE-07 | Chỉ thành viên hợp lệ đọc/gửi; UI báo lỗi khi mất mạng |
| FE-16 | AI giải thích đề xuất | Planned | 5 | S6 | Sẵn sàng | FE-10 | Không hiển thị dữ liệu nhạy cảm; timeout dùng lý do fallback |
| FE-17 | Phát hiện bạn ở gần | Planned | 5 | S6 | Sẵn sàng | FE-04, FE-05, FE-13 | Chỉ gợi ý khi opt-in; không lộ vị trí chính xác |
| FE-20 | Hiệu năng mobile và chuẩn bị demo | Core | 8 | S7 | Sẵn sàng | FE-05, FE-06, FE-10 | Demo ổn định; có số liệu update/độ trễ cần thiết cho phần kiểm thử |

---

## 6. Kế hoạch làm theo Sprint

### S2 — GPS, privacy và realtime map

**Task:**
- `FE-04` — Quyền GPS và cài đặt chia sẻ vị trí.
- `FE-05` — Bản đồ bạn bè realtime.
- `FE-06` — Socket client và vòng đời location.

**Mục tiêu đầu ra:**
- Xin quyền GPS đúng.
- Map có marker và stale state.
- Socket reconnect không nhân listener.
- UI phản ánh đúng trạng thái quyền/chia sẻ.
- Vị trí quá 5 phút phải hiển thị là vị trí cũ.

### S4 — Recommendation và ETA

**Task:**
- `FE-10` — Kết quả gợi ý địa điểm.

**Mục tiêu đầu ra:**
- Hiển thị top 5 địa điểm.
- Hiển thị `Avg ETA`, `Max ETA`, ETA từng người.
- Hiển thị rating.
- Hiển thị nhãn quy mô tính toán `exact / batch / cluster`.
- Hiển thị rõ trường hợp thiếu vị trí.
- Kết quả phải bám dữ liệu Backend trả về, không tự suy diễn.

### S5 — Notification và Place

**Task:**
- `FE-11` — Chi tiết địa điểm và lọc đang mở cửa.
- `FE-13` — FCM, nhắc lịch và deep link.

**Mục tiêu đầu ra:**
- Place card/detail rõ ràng.
- `open-now` chỉ hoạt động khi Places có dữ liệu giờ mở.
- Nếu thiếu giờ mở, hiển thị `chưa có dữ liệu`.
- Notification mở đúng màn hình meetup.
- Xử lý notification ở foreground/background.

### S6 — Chat, AI explanation và Nearby

**Task:**
- `FE-15` — Chat nhóm trong Meetup.
- `FE-16` — AI giải thích đề xuất.
- `FE-17` — Phát hiện bạn ở gần.

**Mục tiêu đầu ra:**
- Chat realtime chỉ dành cho thành viên hợp lệ.
- Mất mạng/reconnect có trạng thái UI rõ.
- AI explanation không làm lộ dữ liệu nhạy cảm.
- Khi AI timeout/lỗi phải có fallback.
- Nearby chỉ hoạt động khi các điều kiện opt-in phù hợp.
- Không lộ vị trí chính xác của người bạn.

### S7 — Hiệu năng và demo

**Task:**
- `FE-20` — Hiệu năng mobile và chuẩn bị demo.

**Mục tiêu đầu ra:**
- Theo dõi loading / re-render.
- Theo dõi số update vị trí.
- Polish luồng demo.
- Kiểm tra trên Android thật.
- Có số liệu update / độ trễ cần thiết cho phần kiểm thử.
- Demo ổn định.

---

## 7. Các contract phải chốt trước khi code song song

Frontend 2 phải phối hợp với Backend và Frontend 1 để chốt:

- `LocationUpdated`
- `MeetupMemberChanged`
- `PreferenceUpdated`
- `RecommendationReady`
- `VoteUpdated`
- `MeetupFinalized`

Mỗi event cần rõ:
- Tên event.
- Payload tối thiểu.
- Ai phát.
- Ai nhận.
- Trường hợp nào không được phát do thiếu quyền.

Không đưa token, tọa độ chính xác hoặc dữ liệu AI nhạy cảm vào log/event khi không cần thiết.

---

## 8. Các nguyên tắc Frontend 2 phải giữ

### Location / Privacy

- Backend mới là nơi kiểm tra quyền; FE không được coi cờ quyền do client gửi là nguồn tin cậy.
- Vị trí chỉ có hiệu lực trong TTL 5 phút.
- Vị trí quá 5 phút phải được coi là stale.
- Khi mất quyền/chia sẻ vị trí hoặc meetup kết thúc/rời/hủy, UI phải phản ánh trạng thái tương ứng.
- Không được hiển thị vị trí cũ như realtime.
- Accuracy lớn hơn 100 m phải có cảnh báo; không khẳng định vị trí chính xác.
- Không lưu lịch sử GPS trong các màn hình lịch sử/favorite.
- Với tính năng nearby, không hiển thị tọa độ hoặc địa chỉ chính xác của người bạn.

### Recommendation

- FE hiển thị `Avg ETA`, `Max ETA`, ETA từng người.
- Hiển thị đúng nhãn `exact / batch / cluster` theo dữ liệu Backend.
- Không tự tính lại hoặc tự thay đổi thứ tự recommendation nếu Backend đã trả kết quả xếp hạng.
- Khi thiếu vị trí, phải báo rõ thay vì giả định dữ liệu còn hợp lệ.

### Places

- `open-now` chỉ lọc khi Places trả dữ liệu giờ mở.
- Nếu không có dữ liệu giờ mở, phải hiển thị `chưa có dữ liệu`.
- Không tự suy đoán một địa điểm đang mở.

### FCM / Deep Link

- Notification chính gồm lời mời, địa điểm được chốt và nhắc lịch.
- Chạm notification phải mở đúng màn hình.
- Phải xử lý đúng trạng thái foreground/background.

### Chat

- Chỉ member hợp lệ mới được đọc/gửi.
- Khi mất mạng phải hiển thị trạng thái gửi/lỗi.
- Reconnect không được nhân listener hoặc tạo event trùng.

### AI Explanation

- AI chỉ dùng dữ liệu tổng hợp.
- Không gửi latitude/longitude, tên thật hoặc lịch sử GPS nếu không cần.
- Khi AI lỗi/timeout, dùng lý do fallback từ thuật toán.
- AI explanation không được thay đổi thứ hạng recommendation.

---

## 9. Tiêu chí Done cho Frontend 2

Một task Frontend 2 chỉ xem là hoàn thành khi:

1. API contract hoặc Socket event đã rõ.
2. UI state đã rõ cho loading / success / empty / error khi cần.
3. Có xử lý quyền truy cập và các trường hợp thiếu dữ liệu.
4. Có test tối thiểu cho luồng thành công và lỗi chính.
5. Không log/cache dữ liệu nhạy cảm không cần thiết.
6. Chức năng demo được trên Android.
7. PR đã được review khi có phần giao thoa với Frontend 1.

---

## 10. Review chéo

Frontend 2 phải review phần giao thoa với:
- Account / social / meetup flow.
- Navigation và state dùng chung.
- Privacy UX.
- Các màn hình sử dụng dữ liệu từ meetup.
- Contract giữa API / Socket / UI.

Ngược lại, Frontend 1 cần review các PR của Frontend 2 khi có ảnh hưởng đến:
- Socket.
- Location.
- Recommendation.
- FCM.
- Chat.
- AI.
- Nearby.

---

## 11. Thứ tự ưu tiên để agent triển khai

### P0 — Làm trước
1. `FE-04` — GPS permission + sharing settings.
2. `FE-06` — Socket client + location lifecycle.
3. `FE-05` — Realtime friend map.

### P1 — Sau khi realtime ổn
4. `FE-10` — Recommendation result / ETA.
5. `FE-11` — Place detail + open-now.
6. `FE-13` — FCM + deep link.

### P2 — Tính năng mở rộng đã cam kết
7. `FE-15` — Group chat.
8. `FE-16` — AI explanation.
9. `FE-17` — Nearby friend.

### P3 — Polish và demo
10. `FE-20` — Mobile performance + demo preparation.

---

## 12. Checklist dành riêng cho Frontend 2

- [ ] FE-04 hoàn thành.
- [ ] FE-06 hoàn thành.
- [ ] FE-05 hoàn thành.
- [ ] FE-10 hoàn thành.
- [ ] FE-11 hoàn thành.
- [ ] FE-13 hoàn thành.
- [ ] FE-15 hoàn thành.
- [ ] FE-16 hoàn thành.
- [ ] FE-17 hoàn thành.
- [ ] FE-20 hoàn thành.
- [ ] API / Socket contracts đã chốt trước khi tích hợp.
- [ ] Không có duplicate listener sau reconnect.
- [ ] Không hiển thị stale location như realtime.
- [ ] Không để lộ dữ liệu location nhạy cảm.
- [ ] Recommendation hiển thị đủ Avg ETA / Max ETA / ETA từng người.
- [ ] Exact / batch / cluster hiển thị đúng.
- [ ] Open-now xử lý đúng trường hợp thiếu dữ liệu.
- [ ] Notification mở đúng màn hình.
- [ ] Chat giới hạn đúng member.
- [ ] AI fallback hoạt động.
- [ ] Nearby không lộ vị trí chính xác.
- [ ] Demo chạy ổn định trên Android.

---

## 13. Mục tiêu cuối cùng của Frontend 2

Frontend 2 sở hữu toàn bộ phần **GPS → Location → Socket → Map → Recommendation/ETA → Places → Notification → Chat → AI Explanation → Nearby → Performance/Demo**.

Khi triển khai, ưu tiên làm chắc luồng realtime/location trước, sau đó recommendation và integration, cuối cùng mới polish các tính năng mở rộng và hiệu năng. Không tự nhận thêm ownership của Frontend 1 nếu chưa có thỏa thuận phân công.
