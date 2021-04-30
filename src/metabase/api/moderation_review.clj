(ns metabase.api.moderation-review
  (:require [compojure.core :refer [POST]]
            [metabase.api.common :as api]
            [metabase.models.moderation-review :as moderation-review]
            [metabase.moderation :as moderation]
            [metabase.util.schema :as su]
            [schema.core :as s]))

(api/defendpoint POST "/"
  "Create a new `ModerationReview`."
  [:as {{:keys [text moderated_item_id moderated_item_type]} :body}]
  {text                (s/maybe s/Str)
   moderated_item_id   su/IntGreaterThanZero
   moderated_item_type moderation/moderated-item-types}
  (let [review-data {:text                text
                     :moderated_item_id   moderated_item_id
                     :moderated_item_type moderated_item_type
                     :moderator_id        api/*current-user-id*}]
    ;;TODO permissions
    (api/check-500
     (moderation-review/create-review! review-data))))

(api/define-routes)