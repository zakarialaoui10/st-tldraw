#!/usr/bin/env bash
rm -rf dist/*
(cd st_tldraw/frontend && npm run build) && uv build