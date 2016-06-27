(defproject comamitc "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [secretary "1.2.3"]
                 [hiccups "0.3.0"]]

  :npm {:dependencies [[source-map-support "0.4.0"]
                       [ws "0.8.1"]]}

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.0-6"]
            [lein-npm "0.4.0"]
            [lein-pdo "0.1.1"]
            [lein-less "1.7.5"]
            [lein-asset-minifier "0.2.4"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled/comamitc.js"
                                    "resources/public/js/compiled/comamitc.min.js"
                                    "resources/public/js/compiled/out"
                                    "target"]

  :figwheel {:css-dirs ["resources/public/css"]
             :repl false}

  :less {:source-paths ["less"]
         :target-path  "resources/public/css/compiled"}

  :minify-assets {:assets {"resources/public/css/compiled/site.min.css"
                           "resources/public/css/compiled/site.css"}
                  :options {:optimizations :advanced}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "comamitc.core/init"}
                        :compiler {:main comamitc.core
                                   :output-to "resources/public/js/compiled/comamitc.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "release"
                        :source-paths ["src"]
                        :compiler {:main comamitc.core
                                   :output-to "resources/public/js/compiled/comamitc.min.js"
                                   :optimizations :advanced
                                   :closure-defines {goog.DEBUG false}
                                   :pretty-print false}}]}
  :aliases {"dev" ["pdo" ["less" "auto"]
                         ["figwheel" "dev"]]
            "prod" ["do" ["clean"]
                         ["less" "once"]
                         ["minify-assets"]
                         ["cljsbuild" "once" "release"]]})
