Facebook Page Tracker Description Facebook Page Tracker is a web application built with the MERN stack that allows users to log in with their Facebook account, select a page they manage, 
and view various insights and metrics for that page. The application integrates with the Facebook Graph API to fetch and display data like page likes, engagement, and impressions.


IMP note :   
1. firstly you have to Create a Facebook App 

a. Go to this url https://developers.facebook.com/apps/ 
b. Click on the ‘Create App’ button. (make sure to login if not already logged in 
c. Facebook will redirect you to a new page and will ask for “What do you want your app to do?” in his page select “Others” and click on Next 
d. Then select “Business” and click Create App button



2.Enabling User Login 

a. Once you have created your app. Navigate to this url https://developers.facebook.com/apps/<app_id>/add/ 
b. Replace, <app_id> with your newly created app id 
c. Scroll down, and you will see “Facebook Login for Facebook” 
d. Select Set Up, when the setup page opens up make sure to enter proper URLs for “Valid OAuth Redirect URIs” and “Allowed Domains for the JavaScript SDK” fields. 
e. Click on “Save Changes” and now you can proceed with the programming part



note : 1) In order for login to work, you will need to make sure your project is using HTTPS even in a development environment. 
2) Appshould be in development mode, in order to work, you don’t need any permission, approval or verification from Meta.




Features:
Facebook Login: Users can log in using their Facebook account. 
Page Selection: Users can select a Facebook page they manage. 
Insights Display: View various metrics and insights for the selected page. 
Responsive Design: The application is designed to be responsive and user-friendly.



Technologies Used: 
Facebook app Frontend: React.js 
Backend: Node.js 
API: Facebook Graph API 
Styling: CSS 
ngork : for https



Installation To get started with this project, follow these steps:

Clone the Repository
git clone https://github.com/geek-harsh17/facebook-page-tracker.git Navigate to the Project Directory
cd facebook-page-tracker Install Dependencies


Create a Facebook App at Facebook Developer. Set up the necessary permissions and obtain the App ID and App Secret. Configure Environment Variables
create a react app and then copy the code exactly and do change the OAuth and domain in the facebook app according to your localhost which is converted to https by ngork.


npm start 
The application will run on http://localhost:3000 by default.



Usage Login: Click on "Login with Facebook" and authorize the app. 
Select a Page: Choose a Facebook page you manage from the dropdown. 
View Insights: The page insights will be displayed once a page is selected. 



Contributing If you'd like to contribute to this project, 
Contact If you have any questions, feel free to reach out to me at harshukramesh@gmail.com.
