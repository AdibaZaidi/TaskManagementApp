from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample initial tasks
tasks = [
    {"id": 1, "title": "Task 1", "description": "Description 1", "status": "todo"},
    {"id": 2, "title": "Task 2", "description": "Description 2", "status": "doing"},
    {"id": 3, "title": "Task 3", "description": "Description 3", "status": "done"}
]

# Get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True)
