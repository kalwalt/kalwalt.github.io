Gem::Specification.new do |s|
  s.name        = 'amp-pwa-plugin'
  s.version     = '2.1.4'
  s.date        = '2018-09-03'
  s.summary     = "PWA support for Jekyll."
  s.description = "This plugin provides PWA + AMP support for Jekyll. Generate a service worker and provides precache with Google Workbox."
  s.authors     = ["Pan Yuqi", "Walter Perdan"]
  s.email       = 'info@kalwaltart.it'
  s.files       = Dir["lib/*.rb"] + Dir["lib/vendor/**/*"]
  s.homepage    =
    'https://www.kalwaltart.it'
  s.license       = 'MIT'
end
