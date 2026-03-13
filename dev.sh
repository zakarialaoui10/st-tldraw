#!/usr/bin/env bash

# Start frontend
(cd st_tldraw/frontend && npm i && npm start) &

# Start streamlit
streamlit run example.py

# Kill frontend when streamlit exits
kill $(jobs -p)