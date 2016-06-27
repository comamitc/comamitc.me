(ns comamitc.core
  (:require
    [comamitc.router :as router]))

(enable-console-print!)

(defn ^:export init []
  (router/init))
