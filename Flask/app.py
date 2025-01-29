from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    cs = int(request.form["cs"])
    math = int(request.form["math"])
    english = int(request.form["english"])
    data_science = int(request.form["data_science"])
    total_marks = (cs + math + english + data_science)
    return render_template("result.html", result=total_marks)

# @app.route("/result/<int:total_marks>")
# def result(total_marks):
#     res = ""
#     if total_marks >= 160:
#         res = "pass"
#     else :
#         res = "fail"
#     return render_template("result.html", result=res)

if __name__=='__main__':
    app.run(debug=True)