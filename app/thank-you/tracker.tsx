"use client";

import { useEffect } from "react";
import { track, uuid } from "@/lib/analytics";

type Props = { asset?: string; order?: string };

export default function ThankYouTracker({ asset, order }: Props) {
  useEffect(() => {
    if (order) {
      track("Purchase", { content_name: "FlyPro Course", value: 397, currency: "ILS", order_id: order }, uuid());
    } else if (asset) {
      track("CompleteRegistration", { content_name: asset }, uuid());
    }
  }, [asset, order]);

  return null;
}
