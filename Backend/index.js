import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(express.json());
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://arslanshahid1:hafiz123@cluster0.4sccy.mongodb.net/fyp?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('DB connected');
});

//Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: 'Login successful', user });
      } else {
        res.send({ message: 'Incorrect password' });
      }
    } else {
      res.send({ message: 'Üser does not exist' });
    }
  });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User already registered. Please choose different email' });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      user.save((err) => {
        if (err) {
          console.log(error.message);
        } else {
          res.send({ message: 'Successfully registered. Please login now.' });
        }
      });
    }
  });
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model('User', userSchema);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
