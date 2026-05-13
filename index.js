const express = require("express");
const app = express();
app.use(express.json());

// بيانات تسجيل الدخول (تقدر تغيرها لاحقًا)
const USER_EMAIL = "admin@sharq.com";
const USER_PASSWORD = "123456";

// مسار تسجيل الدخول
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === USER_EMAIL && password === USER_PASSWORD) {
        return res.json({
            success: true,
            message: "Login successful",
            redirect: "https://your-app-url/dashboard"
        });
    }

    return res.json({
        success: false,
        message: "Invalid email or password"
    });
});

// تشغيل السيرفر
app.listen(3000, () => console.log("API running on port 3000"));
