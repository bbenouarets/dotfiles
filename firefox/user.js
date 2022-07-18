// Disable WebRTC - P2P Connections
user_pref("media.peerconnection.enabled", false);

user_pref("network.dnsCacheExpiration", 10);

// Activate DNS for IPv6
user_pref("network.dns.disableIPv6", true);

// Don't send referer headers
user_pref("network.http.sendRefererHeader", 0);

// Set cookie lifetime to 2
user_pref("network.cookie.lifetimePolicy", 2);

// Disable Clipboard Events
user_pref("dom.event.clipboardevents.enabled", false);

// Disable Geo Location
user_pref("geo.enabled", false);

// Disable Microsoft Windows Location
user_pref("geo.provider.ms-windows-location", false);

// Privacy Tracking Protection
user_pref("privacy.trackingprotection.enabled", true);

// Privacy Tracking Protection Social Tracking
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Disable WebGL
user_pref("webgl.disabled", false);

// Disable "Send pings"
user_pref("browser.send_pings", false);

// Disable prefech next link
user_pref("browser.prefetch-next", false);

// Disable Form Autofill
user_pref("browser.formfill.enable", false);

// Disable disk cache
user_pref("browser.cache.disk.enable", false);

// Disable memory cache
user_pref("browser.cache.memory.enable", false);

// Disable offline cache
user_pref("browser.cache.offline.enable", false);

// Disable startup page
user_pref("browser.startup.page", 0);

// Set startup page to blank
user_pref("browser.startup.homepage", "about:blank");

// New tab page
// Disable telemetry for activity stream
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Disable Browser discovery
user_pref("browser.discovery.enabled", false);

// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// Disable Firefox allow to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);

// Crash Reporting
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
