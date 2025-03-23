# AI Browsing Assistant Chrome Extension

A **Chrome Extension** that allows users to analyze selected text on any webpage using an AI model. The extension fetches AI-generated responses and displays them in a popup window.

## 🚀 Features
- **Right-click Selection**: Select text and analyze it via the context menu.
- **Popup Window**: Displays selected text and AI-generated response.
- **AI Integration**: (Planned) Uses OpenAI API to generate insights.
- **User-friendly UI**: Clean and simple design for ease of use.

---

## 📌 How to Use
### 1️⃣ Install the Extension Locally
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Pranavkok/Ai-Text-Analyzer-Extension.git
   cd Ai-Text-Analyzer-Extension
   ```
2. **Load the Extension in Chrome**:
   - Open `chrome://extensions/` in your browser.
   - Enable **Developer Mode** (top-right corner).
   - Click **Load Unpacked** and select the extension folder.

### 2️⃣ Start the Backend Server
This extension requires a Python Flask backend to process AI responses.
1. Install dependencies:
   ```sh
   pip install flask
   ```
2. Run the server:
   ```sh
   python app.py
   ```
   The server will run at `http://127.0.0.1:5000/`

### 3️⃣ Use the Extension
1. **Select text** on any webpage.
2. **Right-click → Choose 'Analyzer'** from the context menu.
3. The **popup will open** with the selected text.
4. Click **'Analyze'** to fetch the AI response (ensure the backend is running).

---

## 🎥 Project Demo
[![Watch the Video](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAygMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEFAwQHCAb/xABDEAACAQICBAcNBwQBBQAAAAAAAQIDBAURBhIxkRQhQVFSk9ETFSI2RFNhcXJzgZKxFjI0QlSywSQ1Q6ElBxcjVoL/xAAbAQEBAAMBAQEAAAAAAAAAAAAAAQIEBgMFB//EADcRAQABAgMFBQcCBgMBAAAAAAABAgMEEVESFTFxkQUhMjRBExQzUmGhsZLRIkJTVIHBYuHwI//aAAwDAQACEQMRAD8A7YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEOSj95petkzgjvR3SHTjvGcLszoO6Q6cd4zg2atE68OnHeM4NmrQa8OnHeNqDZnQa8OlHeM4NmdBrw6cd4zg2Z0GvHpx3jM2Z0GvDpx+YZwZToNeHTjvGcGU6DXh047xnBlOg14dKO8ZwZSNePSjvGcGUjXj0o7xnBlI14dOO8ZwZSNeHSW8ZwZSNePSjvGcGUjWj047xnBlOg149KO8ZxqZToNePSjvGcamU6DWT2STfrGcJlMcUlAAAAEgcG0hxO6xLGLuvc1pyyqyjCGs9WEU8kkuQ57EXa665zl+h4LD27FimmiPSOavUnzvea+1Vq2cjKT52Taq1MoMm+d7ybVWqZQZSfOybVWplBk3zveTaq1TKDKT53vJtVamUGUnzsm1VqxyMpPne8m1VqGUnzveY7VWofWfO942qtUSpPne8m1VqZHTfO95jtVaplBk/T/ALG1VqZQZN87MdqrVEqT53vJtTqh1J87JtVamRk3zk2qtUygyb5ybVWqZQlN873k2qtTKGWnUnTkpU5yhJbJRlk18SxcrpnOJYVUU1RlMdzqOB3M7zCbW4qv/wAk6fhel7M/9HZ4S5N2zTXVxycRi7UWr9VFPCJbxsNcAAAB56vvx9z76f1ZzN3xy/SrXw6eUMSPNmZGKGAZMiGTJIZGKGQQyIGTJKHRiJREOiCUSUOiIZEDIiGREMiBkQMiI6fov/YLL2P5Z2XZ/lqOTiu0vNV81objSAAAcoHnm+f9fc++n9Wc1d8cv0qz8OnkxZnm9JMjFDJkQxAxEMmQMiIZEyTJuWOHXuISasrWrWa2uC4l63sPW3YuXPBGbwvYi1Z77lUQso6MYrl4VO3hLoyuqef7j19xvfTrDW3lh/SZn/E/s17vBcSsqfdLmzqRp9OOU474to868JeojOaf9vW1jcPdnKirv6flopmtMNg6MQyZAyZEMiBkRDJmKGzIGTIjqGi39gsvY/lnZYDy1HJxfaXm6+a0NxogAAkDzte/j7r30/qzmrvjl+lWfh08mNHm9DIiGRAyIhiBkSUMiIusPsbe1so4pi8XKhJ5W9tF5SuJenmguVm3bs0U0+0ucPSNWhfv3K7k2LHH1n0p/edGO/xu+vEqXdOD20fuW1v4FOK9S2+tnndxVyvuico0hnZwVm1O1lnVrPFXo1ZltN2xxG9sJ69pdVaT5UpcT9a2P4nrav3Lc/wy8b2HtXoyuUxP/tVoqdvj8JuhRp2uKRWt3KmsqdyuXVXJP0cpszTRiY/hjKv7S0pquYOf452revrT+8KXjTaaya5D50xlOT6MTn3pRiHREMiBkRDIgZEQyIOo6LeL9n7D+rOx7P8ALUcnFdpebr5rQ3GiAAAA87Xv4+699P6s5u745fpdr4dPKGI82ZkQMjFDIgdEQy2hG9gth30xS3s3LUjUl4cl+WK429x62LXtLkUvDE3/AGFmq5p+fRlxrEu+eITrQjqUIrUt6a2Qpr7q/kYm77S5n6PPCYf2FqKZ754zOs+v7MWHWdXEL2jZ2yi61ZtQ1nks0m9vwPO1bm5VFMPS/dps25uV8I4nv7C7w2u6N9b1KM+TXXE/U9jJcs3Lc5VQlm/avU7Vuc4YEeMw9WWjUlSqQq05OM4NSjJcjWwtNU0znDGqmKommeErbH4xuOC4tSioRvoN1ILZGrF5T37fibeLiK8r0fzflo4KZo2sPV/JPdynvjpwVSNBvHTIGIkmRBKIh0YoZEHUdFfF+y9h/VnY4Dy1HJxXaXm6+a1NxogAAkDzpffj7r30/qzm7vil+l2vh08oYkeb0NmRDIGRkYodMiJTIi+0UerXxCqvvU8OrSj68kv5NzB+OqfpL5/aPfTbjWuPypkaMt9eaFeNeGe9l+yRt4D49LQ7V8lc5R+YdgurS3u6Lo3VGFam9sZxzR0VVEVxlVHc4e3crtVbdE5S+E0n0QwuypSuba/jZrzVeWcW+aPL9T5OKwNmmJqirJ0XZ/a2Iuz7Oqja+scf8+n4fDo+JMOjXUnraI09b/HiDjH4wzf0RuT34OPpL58efn60/iVQnxGi3zpmKJzIkmRAyCHTMRKZEdT0V8XrL2H9WdhgPLUcnFdpebr5rU3GiAAA5SSPOl8/6+699P6s5254pfpdr4dPKGJM8noYBkyIZMiGTMUMQXeiVaFPGqdGtJRpXVOdtKT5NdZL/eRt4SqIu5T6xk0O0aKqsPNVPGmYnpxVlalUtq1ShWi41acnCcXyNPJmrcommqaZ9G3RXTXTFVPCe/qsdGbyjh+P2V5dScaNGcpTaWeS1ZLZ8T1wtym3diqrg1sfarvYau3RxnL8w+nxr/qDcVs6WEUe4Q2d2qpSl8FsXxzN2/2nM91qHycL2DRT335znT0fH3V1cXlV1rqtUrVHtlOWbPl13K65zqnN923aotU7NEZQRM82S8xD+l0fw2zmsqtWU7qcXtSfgx3pZ/E3L38Fii368Xz7H/0xVy7HCMqY/MqdM0G+ZMiGRJDoiJT4iBkRDoiOp6K+L1l7D+rOvwHlqOTiu0vN181qbjRAAAcpJHnO/wDx9176f7mc9c8Uv0y18OnlDEjyZmRAyIhlsIGREOiIlehtPnTyYicpzR9JeUvtFa98bRJ4jRgle0IrwqqS4qsVy8W1eg3rlPvFO3T4o4/X6vl2qvcq/Y3PBPhnT/jP+nz8Xmsz508X08jIgdcZEXGDYdTnTliOJZww6g83ntry5IR5/S+Q28PZiY9rc8MfdoYrEzE+ws+Oft9ZauJX1TEb6rdVcoub8GC2QiuJRXoSNe9dquVzVLYw9mmxbiin0/PrLXR4vUyIGRjKGRAyIhkEOjFHVNFPF6y9h/VnX4Dy9HJxXaXm6+a1NxogAAAPOV//AHC699P9zOdueKX6ZZ+HTyhiPN6GRihgGWwiGRJQyMUMgM1vWqW9eFehUlTq03rQnF5NMtFc0TtQwroprpmiqM4ldSxfDsSeeNYe413tu7JqE37UX4LNr29u58WO/WGhGEvWPL193y1d8deKeB6Oy8KOM3UF0Z2Wb3qRjNvDfPPRfbY3hNqP1f8AR43OAWLztra5xGqtkrqShTX/AMx438WNvDW++mNqfrwYzbxt7urqiiPp3z1lo4jiVziVZVbqeeotWnCK1YQXNFbEa169VdnOps2MPbsU7NuP8+vVqpnjL2OjEMiIZEDJ8ZEMRDIgZMiOq6KeL1l7H8s6/AeWo5OJ7S83WtjbaIAADlA843z/AOQuvfz/AHM5654pfptn4dPKGI8mZkyIZMgYiGISZMiHRESmQMEMnxGIZESTpkRKIh0QMRDIgZEQyISbMxQyIOraJ+L1l7H8s6/AeWo5OI7S83XzWxttEAABygeb75/8hde/qfuZz93xS/TbXw6eUMZ5M0ogdEQyIhiBkSUOjFEoBkRDIxDIiGREk5BKIhyBkRDIgZEQyIhkQdX0T8XbL2P5Z12B8vRycR2l5uvmtjbaIAAADzFiGK2ccRu05vPu9T8j6TPk14O7NUzl93a0duYKmimJme6NJYFjFjravdePm1WYe43tPuy39gdZ/TKYY1YzeUKrl6oNj3G9p9zfuB+aeksixezX55/Iye4XtF37gtZ/TKVjNl05fIye4X9E35gtZ/TKe/Nl05/Iye439DfmC1n9MpWN2PnJ/Ix7hf0hN+YL5p/TJu/lh059Wybvv6R1N+YL5p6Snv5Y9Op1bG77+kdU35gvmnpJljth06nVsm77+kdU35gvmnpKe/8AYdOfVsbvv6R1N94LWekmWkGHdOfVvsMd3YjSOqb7wes9JStIMO85U6t9g3biNI6m+8HrPSTLSHDvOVOrZN24jSOpvvB6z0lP2iw7zk+qkTduI0+6b7wes9JMtI8NX+Sp1UhuzE6R1N9YPWekp+0uGecqdVLsJuzE6R1N9YPWekmWkuGedqdVLsJuzE6R1TfWD+aekp+02GL/AC1OrZN14nSOpvrB/NPSUrSjCltq1Oql2DdeJ0jqm+cH809JN9qMKW2tU6qRN14nSOpvnB/NPSXatB7ind6K4dcUc+51KbcW1lys+/hbdVqzTRVxhzGMu03cRVXRwlenu1gAASB5txK4r6I3mP4TiWB2t1Uu7jWpVbyDcYxzk1KCWWtmpcjWWXHnkwrVq6V0J6GxwHgUlVVOnDhOuvy1JT2ZZ8etl8ANnTvTa10qp4dCjhjs+CNuWtKL7rmkuT1EnvjJlROzVFXHJ873zp/oLVGp7pP9SX197Uf29Ce+VP8AQWo90n+pKb2o/t6Fng2lNDC3Vc9HsKvnUy/Ep+BlzHvatez/AJpnm1MXi6cRllbijLT1Wf8A3Atf/StHvlfYerSyVeP6UUMYo0qdPR7C8OdOetr2sXnPiyyfo5fgFUvCY+Zp7gZp4RHzNPcDMcIXmae4COEx8zT3AHCY+Zp7gDhMfM09wBwmPmqW4A4THzNPcBjq1FN5pRhxflAse/NOOo6eHW8ZQhGOfE03FNZ5avp2cexcYREMXoQhqOwpzyVSMZOceJSior8jzyyz9YG7hWkdnZVL6VbBbSs7qWtCe2dHZ4MXllqvLmW34AVlGvKso0KMLmpUlQlRjSpJSTbnrJJJZ5ejbnygemNBcOuMI0QwmxvI6lxRt0qsM/uyfHl8Mwi9AAAAAx1aFGtl3elTqZbNeKllvAxPDrJ+R2/VR7AMcsNs35JQ6qPYBinhVm/JKHVR7ANephFq/JKHVx7ANWpgtq/JaPVrsA1qmBWz8mo9WgNapgFu/J6XyIDXno7b/p6XyIDDLRu3/T0/kQC/Zqh+np/KgJjo1bp/h6fyIDLDRygvJ6fyIDPDR+3Xk9L5EBs08Btl5NR6tAbVPBbZeS0erQGzDB7VeSUOrXYBsQwq0XklDq49gGeOGWa8kodVHsAyRw6yXklv1UewDJTs7WlNTpW1GElslGmk94GYAAAAAAAJAgAAhxXKBGpFgK6MXyAK7eLAh2sOZbgFdpDmW4COBw9AE8EjzASrWK5AJVtEB1QigGVOIEqKQE5AAEgQAAAAAAAAAAAAAAAABIAwIAAACUAAQAAAAAAAAAAAAB//2Q==)]([https://www.youtube.com/watch?v=YOUR_VIDEO_ID](https://drive.google.com/drive/folders/1-RN9hvKxN4Ly7fgoiIqZuP7GDGTQGxZk))


---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Chrome Extension)
- **Backend:** Python, Flask (AI Processing)
- **API:** OpenAI GPT (Planned Integration)

---

## 📌 Future Enhancements
- ✅ Integrate OpenAI API for AI responses
- ✅ Improve UI with better design
- ✅ Add more customization options for text analysis

---

### 🔗 Author
**Pranav Kok** - [GitHub](https://github.com/Pranavkok)

Feel free to **contribute** or raise issues! 🚀

