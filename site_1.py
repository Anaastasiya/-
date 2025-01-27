from flask import Flask, render_template
app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/routes')
def routes():
    return render_template('routes.html')

if (__name__=="__main__"):
    #app.debug = True
    app.run()