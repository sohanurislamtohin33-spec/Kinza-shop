# Kinza Shop — Full Marketplace Starter

এই project-টি Firebase + Render Static Site-এর জন্য তৈরি। Customer website এবং Admin Panel একই project-এ আছে।

## 1) Firebase Authentication — একবার করতে হবে
Firebase Console → Authentication → Sign-in method → Email/Password Enable করুন।
তারপর Users → Add user দিয়ে:
- Email: `sohanur@kinzashop.local`
- Password: আপনি যে admin password ঠিক করেছেন সেটি দিন।

Admin panel-এ username হবে `sohanur`। UI-তে password টাইপ করবেন; real password public JavaScript-এ রাখা হয়নি।

Customer login-এর জন্য Google provider Enable করুন এবং Authentication → Settings → Authorized domains-এ আপনার Render domain যোগ করুন।

## 2) Firestore
Firestore Database তৈরি করুন। এরপর `firestore.rules`-এর rules Firebase Console → Firestore Database → Rules-এ paste করে Publish করুন।

## 3) Storage
Firebase Storage enable করুন এবং `storage.rules`-এর rules Storage → Rules-এ paste করে Publish করুন।

## 4) Render
GitHub-এ এই folder upload করুন। Render → New → Static Site।
Build Command: empty
Publish Directory: `.`

## 5) Admin
`/admin.html` খুলুন → username `sohanur` → Firebase-এ তৈরি করা password।

Admin থেকে প্রথমে category/product যোগ করুন। Website নিজে থেকেই Firestore থেকে product দেখাবে।

## 6) Order
প্রথম payment method: Cash on Delivery। পরে payment gateway যোগ করা যাবে।

## Security note
Firebase web config public হওয়া স্বাভাবিক। কিন্তু admin password কখনো frontend JS-এ hard-code করবেন না। এই project Firebase Authentication + Firestore/Storage rules দিয়ে admin access আলাদা করেছে।
