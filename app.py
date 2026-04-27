from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

USERNAME = "admin@gmail.com"
PASSWORD = "12345678"

@app.route("/", methods=["GET", "POST"])
def login():
    message = ""

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        if not email or not password:
            message = "Fields cannot be empty"

        elif email != USERNAME or password != PASSWORD:
            message = "Invalid credentials"

        else:
            return redirect(url_for("success"))

    return render_template("login.html", message=message)

@app.route("/success")
def success():
    return "<h1>Login Successful</h1>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)