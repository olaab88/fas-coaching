#!/usr/bin/env python3
"""Capture full-page screenshots of all fas-coaching pages at desktop and mobile."""

import sys
import os

sys.path.insert(0, r"C:\Users\Olaab\.claude\skills\seo\scripts")
from capture_screenshot import capture_screenshot

PAGES = [
    ("https://fas-coaching.vercel.app", "home"),
    ("https://fas-coaching.vercel.app/om", "om"),
    ("https://fas-coaching.vercel.app/timeplan", "timeplan"),
    ("https://fas-coaching.vercel.app/referanser", "referanser"),
    ("https://fas-coaching.vercel.app/kontakt", "kontakt"),
]

OUTPUT_DIR = r"C:\Users\Olaab\.claude\skills\ui-ux-pro-max\screenshots\fas-coaching"
os.makedirs(OUTPUT_DIR, exist_ok=True)

VIEWPORTS = ["desktop", "mobile"]

for url, slug in PAGES:
    for vp in VIEWPORTS:
        out = os.path.join(OUTPUT_DIR, f"{slug}_{vp}.png")
        print(f"Capturing {slug} @ {vp}...")
        result = capture_screenshot(url, out, viewport=vp, full_page=True, timeout=45000)
        if result["success"]:
            print(f"  OK -> {out}")
        else:
            print(f"  FAIL: {result['error']}")
