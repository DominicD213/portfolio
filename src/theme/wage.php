
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wage Reciept</title>
</head>
<body>
    <?php
$server = "localhost";
$user = "cti110";
$pw = "wtcc";
$db = "mydatabase";
$connect=mysqli_connect($server, $user, $pw, $db);
if( !$connect)
{
 die("ERROR: Cannot connect to database $db on server $server
 using user name $user (".mysqli_connect_errno().
 ", ".mysqli_connect_error().")");
}
$hourlyWage = $_POST['hourlyWage'];
$jobTitle = $_POST['jobTitle'];
$userQuery = "SELECT empID FROM personnel WHERE jobTitle='$jobTitle' AND
hourlyWage >= '$hourlyWage'";
$result = mysqli_query($connect, $userQuery);
if (!$result)
{
 die("Could not successfully run query ($userQuery) from $db: " .
 mysqli_error($connect) );
}
if (mysqli_num_rows($result) == 0)
{
 print("No records found with query $userQuery");
}
else
{
 print("<h1>RESULTS</h1>");
 print("<p>The following employees have the $jobTitle job title, and an
hourly wage of $".
 number_format($hourlyWage, 2)." or higher:</p>");

 print("<table border = \"1\">");
 print("<tr><th>EMP ID</th></tr>");

 while ($row = mysqli_fetch_assoc($result))
 {
 print ("<tr><td>".$row['empID']."</td></tr>");
 }
 print ("</table>");
}
mysqli_close($connect); // close the connection
?>
</body>
</html>
<!-- Author:
 Date:
 File:
 Purpose: Wage Report
-->
<html>