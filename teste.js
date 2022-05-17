<script src="https://livechat-v2.chat24.io/packs/ie-11-support.js"></script>

<script>
  window.chat24_token = "950a0dc79c23a4579ce83c0129215a7b";
  window.chat24_url = "https://livechat-v2.chat24.io";
  window.chat24_socket_url ="wss://livechat-v2.chat24.io/widget_ws_new";
  window.chat24_show_new_wysiwyg = "true";
  window.chat24_static_files_domain = "https://storage.chat24.io/";
  window.lang = "pt";
  window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
    return res.json();
  }).then(function (data) {
    var chat24 = document.createElement("script");
    chat24.type = "text/javascript";
    chat24.async = true;
    chat24.src = "".concat(window.chat24_url).concat(data["application.js"]);
    document.body.appendChild(chat24);
  });
  
</script>