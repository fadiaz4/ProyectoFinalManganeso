from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/registration")
def registration():
    return render_template("registration.html")


@app.route("/swimmwear")
def swimmwear():
    return render_template("swimmwear.html")


@app.route("/otros")
def otros():
    return render_template("otros.html")


@app.route("/cart")
def cart():
    return render_template("cart.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/checkout")
def checkout():
    return render_template("checkout.html")


@app.route("/swimmwear2")
def swimmwear2():
    return render_template("swimmwear2.html")


if __name__ == "__main__":
    app.run(debug=True)
