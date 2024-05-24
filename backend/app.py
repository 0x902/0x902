from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

from models import session, Project, Thought

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def index():
    return "Backend is running...", 200

@app.route("/projects", methods=["GET"])
def projects():
    query_results = session.query(Project).all()

    if query_results:
        return jsonify({"projects": [project.project_info() for project in query_results]}), 200
    else:
        return jsonify({"error": "No projects found..." }), 404


@app.route("/thoughts", methods=["GET"])
def thoughts():
    query_results = session.query(Thought).all()

    if query_results:
        return jsonify({"thoughts": [thought.thought_info() for thought in query_results]}), 200
    else:
        return jsonify({"error": "No thoughts found..." }), 404
    
@app.route("/thoughts/<string:thoughtId>", methods=["GET"])
def get_thought(thoughtId):
    query_result = session.query(Thought).filter(Thought.id == thoughtId).first()

    if query_result:
        return jsonify({"thought": query_result.thought_info()}), 200
    else:
        return jsonify({"error": "No thought found..." }), 404

@app.route("/create", methods=["GET", "POST"])
def create():
    return render_template("create.html")


@app.route("/create-project", methods=["POST"])
def create_project():
    title = request.form.get("project-title")
    description = request.form.get("project-description")
    preview = request.form.get("project-preview")
    year = int(request.form.get("project-year"))

    if title and description and preview and year:
        new_project = Project(title=title, description=description, year=year, preview=preview)
        session.add(new_project)
        session.commit()
        return "Created project...", 200
    else:
        return "You missed to input a field...", 500
    
@app.route("/create-thought", methods=["POST"])
def create_thought():
    title = request.form.get("thought-title")
    content = request.form.get("thought-content")
    tags = request.form.get("thought-tags")
    date = request.form.get("thought-date")

    if title and content and tags and date:
        new_thought = Thought(title=title, content=content, tags=tags, date=date)
        session.add(new_thought)
        session.commit()
        return "Created thought...", 200
    else:
        return "You missed to input a field...", 500



if __name__ == "__main__":
    app.run(debug=True)