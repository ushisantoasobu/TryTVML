App.onLaunch = function(options) {

  var javascriptFiles = [
     `${options.BASEURL}js/Presenter.js`
    //  `${options.BASEURL}js/Presentereeeeeee.js`
  ];
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      var alert = createAlert("Hello World!", "");
      Presenter.modalDialogPresenter(alert);
    } else {
      var alert = createAlert("エラーが発生しました", "存在しないJavascriptのファイルが存在します");
      navigationDocument.presentModal(alert);
    }
  });
}

var createAlert = function(title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
        <button>
          <text>OK</text>
        </button>
      </alertTemplate>
    </document>`
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
}
