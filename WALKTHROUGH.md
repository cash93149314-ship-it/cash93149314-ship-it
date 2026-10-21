# 專案操作導覽（Walkthrough）

這份導覽將逐步說明如何檢視、測試與自訂此「海底撈期間限定優惠券領取」靜態網站。

---

## 步驟一：檢視專案檔案

本專案由純靜態檔案組成，無需安裝複雜相依套件：

- [index.html](file:///c:/Users/admin/Desktop/VIBE/index.html)：包含所有活動文案、宣傳海報、優惠券卡片、倒數計時與條款結構。
- [haidilao-promo.jpg](file:///c:/Users/admin/Desktop/VIBE/haidilao-promo.jpg)：官方「滿1500折500」宣傳高清主視覺海報。
- [styles.css](file:///c:/Users/admin/Desktop/VIBE/styles.css)：現代質感設計，支援深紅金漸層、海報卡片金邊光澤、火光微粒、擬物撕票口與按鈕流光特效。
- [script.js](file:///c:/Users/admin/Desktop/VIBE/script.js)：提供倒計時運算、剩餘張數配額動態變化與即時領取通知輪播。
- [README.md](file:///c:/Users/admin/Desktop/VIBE/README.md)：專案快速介紹與配置指南。

---

## 步驟二：開啟與測試頁面

1. **直接開啟測試**：
   - 在電腦檔案總管中開啟資料夾 `c:\Users\admin\Desktop\VIBE`。
   - 連點兩下 [index.html](file:///c:/Users/admin/Desktop/VIBE/index.html) 即可在瀏覽器開啟。

2. **重點功能驗收**：
   - 檢查頂部滾動跑馬燈是否正常輪播。
   - 檢查中央的倒數計時器（時、分、秒）是否每秒遞減。
   - 檢查「前往立即領取」按鈕是否帶有流光動效，點擊後會開新分頁連往 `https://lin.ee/YXXblgy`。
   - 觀察左下角的「即時領取彈窗（Toast）」是否每隔數秒輪播一次使用者領取紀錄。
   - 檢查剩餘張數是否會隨時間動態扣減以營造名額搶購氛圍。

---

## 步驟三：自訂文案與設定

若未來活動細節或名額有變更，可於以下位置進行修改：

1. **修改按鈕目標網址**：
   - 開啟 `index.html`，找到第 135 行附近的 `<a href="https://lin.ee/YXXblgy" ...>` 標籤，更改網址即可。

2. **修改折扣金額或門檻**：
   - 於 `index.html` 中的 `.coupon-body` 區塊，修改數字 `500` 或「滿1500折500」字樣。

3. **調整輪播假名清單**：
   - 開啟 `script.js`，編輯 `users` 陣列，可自行新增或更換姓名。
