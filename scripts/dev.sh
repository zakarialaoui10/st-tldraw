#!/usr/bin/env bash

# Start frontend
(cd st_tldraw/frontend && npm i && npm run start) &

# Start streamlit
streamlit run example.py

# Kill frontend when streamlit exits
kill $(jobs -p)