from sqlalchemy import create_engine, Column, String, Boolean, Integer
from sqlalchemy.orm import sessionmaker, declarative_base
import uuid
from datetime import datetime

db = "sqlite:///portfolio.db"
engine = create_engine(db)

Base = declarative_base()

Session = sessionmaker(bind=engine)
session = Session()

def generate_id():
    return str(uuid.uuid4())

class Project(Base):
    __tablename__ = "projects"
    id = Column("id", String, primary_key=True, default=generate_id)
    title = Column("title", String, nullable=False)
    description = Column("description", String, nullable=False)
    technologies = Column("technologies", String, nullable=False)
    year = Column("year", Integer, nullable=False)
    preview = Column("preview", String, nullable=False)

    def __init__(self, title, description, technologies, year, preview):
        self.title = title
        self.description = description
        self.technologies = technologies
        self.preview = preview
        self.year = year

    def project_info(self):
        return {
            "id": self.id,
            "title" : self.title,
            "description" : self.description,
            "technologies": self.technologies,
            "year": self.year,
            "preview" : self.preview,
        }


class Thought(Base):
    __tablename__ = "thoughts"
    id = Column("id", String, primary_key=True, default=generate_id)
    title = Column("title", String, nullable=False)
    content = Column("content", String, nullable=False)
    tags = Column("tags", String, nullable=False)
    date = Column("date", String, default=str(datetime.now()))

    def __init__(self, title, content, tags, date):
        self.title = title
        self.content = content
        self.tags = tags
        self.date = date

    def thought_info(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "tags": self.tags,
            "date": str(self.date)
        }

class Status(Base):
    __tablename__ = "status"
    id = Column("id", String, primary_key=True, default=generate_id)
    status = Column("status", String, nullable=False)

    def __init__(self, status):
        self.status = status

    def status_info(self):
        return {
            "status" : self.status
        }

    

Base.metadata.create_all(bind=engine)
