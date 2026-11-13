// 這個檔案存在 = 網頁鎖住；刪除這個檔案 = 開放使用。
const root = document.documentElement;
root.style.visibility = "hidden";
addEventListener("DOMContentLoaded", () => {
  root.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>未開放</title></head>' +
    '<body style="margin:0;min-height:100vh;display:grid;place-content:center;text-align:center;padding:24px;font:16px/1.7 system-ui,sans-serif;color-scheme:light dark">' +
    '<h1 style="font-size:1.25rem">🔒 未開放</h1><p>目前不在活動期間，暫不開放使用。</p></body>';
  root.style.visibility = "";
});
