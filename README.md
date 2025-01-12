
# Fitness Class Scheduler Project

Welcome to the **Fitness Class Scheduler Project**, an innovative solution to streamline class scheduling and analytics. This project integrates a **Flask-based backend** with an **Angular-based frontend**, delivering an intuitive experience for both administrators and users.

---

## 🖼️ Screenshots

### Backend API Response:
🖥️ API Endpoints

The Flask backend provides the following RESTful API endpoints for managing class schedules:

1. POST /api/classes

   Description: Create a new class schedule.
  
   Response:
  
   ![image](https://github.com/user-attachments/assets/e1b16aa4-255b-4bd0-b20e-608dc9286742)


2. GET /api/classes

   Description: Retrieve a list of all class schedules.
   
   ![image](https://github.com/user-attachments/assets/52b9285b-4d07-4aa7-90da-a31e322c96bf)


4. PUT /api/classes/<id>

   Description: Retrieve a list of all class schedules.
   
   ![image](https://github.com/user-attachments/assets/586ffc3f-9a4f-468f-940b-846c124cdb06)

6. DELETE /api/classes/<id>

   Description: Delete a class schedule by its ID
   
   ![image](https://github.com/user-attachments/assets/0b9e5ba1-a0af-4c44-b891-625a9e4e015a)



### Frontend Pages:

#### Home:
![image](https://github.com/user-attachments/assets/0ce95d1b-a40a-4d22-ad44-3cf492ae7c95)
![image](https://github.com/user-attachments/assets/1925cdf6-f348-4e6a-8431-84697d90bf94)


#### Add Class Form:
![image](https://github.com/user-attachments/assets/d91ec2d7-a4e5-4841-bdb1-eeb2afba6637)


#### view class:
![image](https://github.com/user-attachments/assets/9e0e2e52-0a1e-4436-84bc-1cdffaf3af2e)

#### Update class:
![image](https://github.com/user-attachments/assets/174e11b3-ac37-4c81-a970-fbb891fd2b41)
![image](https://github.com/user-attachments/assets/b7bb4a9e-fecc-4c7b-834a-9f9e390df0f0)

#### Analytics Dashboard:
![image](https://github.com/user-attachments/assets/97cdeab2-ae27-4ffe-b2d8-35486e5e077a)
![image](https://github.com/user-attachments/assets/bac45e74-1322-42b2-9103-c27b18613465)


---


## 🚀 Features

### Backend (Flask):
- 🌟 **RESTful API Support**: Manage class schedules effortlessly.
- 📊 **Powerful Analytics**: Gain insights into class trends and attendance.
- 🛠️ **CRUD Operations**: Create, update, delete, and retrieve class information.

### Frontend (Angular):
- 📅 **Class Schedule Display**: View and manage all scheduled classes.
- 📝 **User-Friendly Forms**: Simplify class creation and updates.
- 📈 **Dynamic Dashboards**: Visualize analytics with interactive charts and tables.

---


## 🛠️ Setup Instructions

### Prerequisites:
1. **Backend**: Python 3.12.3 or above.
2. **Frontend**: Node.js with npm and Angular CLI.
3. **Database**: SQLite or any preferred database.

### Backend Setup:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fitness-class-scheduler/backend
   ```
2. Set up a virtual environment (optional):
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/MacOS
   venv\Scripts\activate    # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the database:
   ```bash
   flask db upgrade
   ```
5. Run the Flask server:
   ```bash
   flask run
   ```

### Frontend Setup:
1. Navigate to the frontend directory:
   ```bash
   cd fitness-class-scheduler/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
4. Open the app in your browser:
   ```
   http://localhost:4200
   ```

---

