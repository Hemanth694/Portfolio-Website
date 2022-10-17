from flask import Flask, request
from flask_cors import CORS
import pymysql
import datetime
import cryptography
import logging

app = Flask(__name__)
CORS(app)
db = pymysql.connect(host="localhost", user="root",
                     password="hemanth", db="portfolio", autocommit=True)


@app.route("/api/recommendations", methods=["GET"])
def getRecommendations():
    cursor = db.cursor()
    cmd = "SELECT * FROM RECOMMENDATIONS WHERE onShowcase=true;"
    try:
        cursor.execute(cmd)
        recommendations = cursor.fetchall()
        finalrec = []
        for recommendation in recommendations:
            recommendation_dict = {
                "id": recommendation[0],
                "name": recommendation[1],
                "company": recommendation[3],
                "designation": recommendation[4],
                "message": recommendation[5]
            }
            finalrec.append(recommendation_dict)
    except Exception as e:
        print(e)
        return{"isSubmitted": False, "payload": []}
    finally:
        cursor.close()
    return {"isSubmitted": True, "payload": finalrec}


@app.route("/api/skills", methods=["GET"])
def getSkills():
    cursor = db.cursor()
    cmd = "SELECT * FROM SKILLS;"
    try:
        cursor.execute(cmd)
        skills = cursor.fetchall()
        finalskill = []
        for skill in skills:
            skill_dict = {
                "id": skill[0],
                "imageUrl": skill[1],
                "name": skill[2],
                "starsTotal": skill[3],
                "starsActive": skill[4]
            }
            finalskill.append(skill_dict)
    except:
        return{"isSubmitted": False, "payload": []}
    finally:
        cursor.close()
    return {"isSubmitted": True, "payload": finalskill}


@app.route("/api/projects", methods=["GET"])
def getProjects():
    cursor = db.cursor()
    cmd = "SELECT * FROM PROJECTS WHERE isPublished=true ORDER BY lastModified DESC;"
    try:
        cursor.execute(cmd)
        projects = cursor.fetchall()
        finalproject = []
        for project in projects:
            project_dict = {
                "id": project[0],
                "imageUrl": project[1],
                "title": project[2],
                "excerpt": project[3]
            }
            finalproject.append(project_dict)
    except:
        return{"isSubmitted": False, "payload": []}
    finally:
        cursor.close()
    return {"isSubmitted": True, "payload": finalproject}


@app.route("/api/blogs", methods=["GET"])
def getBlogs():
    cursor = db.cursor()
    cmd = "SELECT * FROM BLOGS WHERE isPublished=true ORDER BY lastModified DESC;"
    try:
        cursor.execute(cmd)
        blogs = cursor.fetchall()
        finalblog = []
        for blog in blogs:
            blog_dict = {
                "id": blog[0],
                "imageUrl": blog[1],
                "title": blog[2],
                "excerpt": blog[3]
            }
            finalblog.append(blog_dict)
    except:
        return{"isSubmitted": False, "payload": []}
    finally:
        cursor.close()
    return {"isSubmitted": True, "payload": finalblog}


@app.route("/api/blog/add", methods=["POST"])
def addBlog():
    cursor = db.cursor()
    blog = request.json
    id = blog["id"]
    imageUrl = blog["imageUrl"]
    title = blog["title"]
    excerpt = blog["excerpt"]
    body = blog["body"]
    curr_datetime = datetime.datetime.now()
    try:
        cmd = f"INSERT INTO BLOGS VALUES (%s, %s, %s, %s, %s, true, %s);"
        cursor.execute(cmd, (id, imageUrl, title,
                             excerpt, body, curr_datetime))
    except:
        return {"isSubmitted": False}
    finally:
        cursor.close()
    return{"isSubmitted": True}


@app.route("/api/project/add", methods=["POST"])
def addProject():
    cursor = db.cursor()
    blog = request.json
    id = blog["id"]
    imageUrl = blog["imageUrl"]
    title = blog["title"]
    excerpt = blog["excerpt"]
    body = blog["body"]
    curr_datetime = datetime.datetime.now()
    try:
        cmd = f"INSERT INTO PROJECTS VALUES (%s, %s, %s, %s, %s, true, %s);"
        cursor.execute(cmd, (id, imageUrl, title,
                             excerpt, body, curr_datetime))
    except:
        return {"isSubmitted": False}
    finally:
        cursor.close()
    return{"isSubmitted": True}


@app.route("/api/recommendation/add", methods=["POST"])
def addRecommendation():
    try:
        recommendation = request.json
        id = recommendation["id"]
        name = recommendation["name"]
        email = recommendation["email"]
        company = recommendation["company"]
        designation = recommendation["designation"]
        message = recommendation["message"]
        cmd = f"INSERT INTO RECOMMENDATIONS VALUES (%s, %s, %s, %s, %s, %s, false);"
        cursor = db.cursor()
        cursor.execute(cmd, (id, name, email,
                             company, designation, message))
        return{"isSubmitted": True}
    except:
        return {"isSubmitted": False}
    finally:
        cursor.close()
