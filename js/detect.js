var BrowserDetect = {
  init: function() {
    this.browser = this.searchString( this.dataBrowser ) || "An unknown browser";
    this.version = $.browser.version;
    /* this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";*/

    var ie = ( function() {

      var undef,
        v = 3,
        div = document.createElement( 'div' ),
        all = div.getElementsByTagName( 'i' );

      while (
        div.innerHTML = '<!--[if gt IE ' + ( ++v ) + ']><i></i><![endif]-->',
        all[ 0 ]
      );

      return v > 4 ? v : undef;

    }() );
    //alert(this.browser +" "+ this.version)	
    this.OS = this.searchString( this.dataOS ) || "an unknown OS";

    if ( this.browser === "Explorer" && parseInt( this.version ) < 9 ) {
      window.top.location = "http://dev-eha.cc.ic.ac.uk/eha/landing.html"
    }
  },
  searchString: function( data ) {
    for ( var i = 0; i < data.length; i++ ) {
      var dataString = data[ i ].string;
      var dataProp = data[ i ].prop;
      this.versionSearchString = data[ i ].versionSearch || data[ i ].identity;
      if ( dataString ) {
        if ( dataString.indexOf( data[ i ].subString ) != -1 )
          return data[ i ].identity;
      } else if ( dataProp )
        return data[ i ].identity;
    }
  },
  searchVersion: function( dataString ) {
    var index = dataString.indexOf( this.versionSearchString );
    if ( index == -1 ) return;
    return parseFloat( dataString.substring( index + this.versionSearchString.length + 1 ) );
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
  },
    {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
  },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
  },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
  },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
  },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
  },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
  },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
  },
    { // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
  },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
  },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
  },
    { // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
  }
 ],
  dataOS: [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
  },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
  },
    {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iPhone/iPod"
     },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
  }
 ]

};
BrowserDetect.init();