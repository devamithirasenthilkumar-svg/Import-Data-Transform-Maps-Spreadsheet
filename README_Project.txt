# IMPORT DATA USING TRANSFORM MAPS
## ServiceNow Spreadsheet Import Project

### Project Objective
To import student data from an Excel/CSV spreadsheet into a ServiceNow target table using Import Sets and Transform Maps.

### Technologies
- ServiceNow
- Import Sets
- Transform Maps
- JavaScript
- Excel / CSV

### Project Flow
Spreadsheet (CSV/Excel)
        |
        v
System Import Sets -> Load Data
        |
        v
Import Set Table
        |
        v
Transform Map
        |
        v
Field Mapping + Coalesce
        |
        v
Target Table
        |
        v
Student Records

### Target Table
Create a custom table:
Name: Student
Example fields:
- u_name
- u_roll_no
- u_department
- u_email
- u_phone

### Import Set Table
Suggested name:
u_student_import

Source fields:
- u_name
- u_roll_no
- u_department
- u_email
- u_phone

### Transform Map
Name: Student Data Transform Map
Source table: u_student_import
Target table: Student [u_student]

### Field Mapping
Source                 Target
u_name                 u_name
u_roll_no               u_roll_no
u_department            u_department
u_email                u_email
u_phone                 u_phone

### Coalesce
Set Coalesce = true for:
u_roll_no -> u_roll_no

This prevents duplicate student records. If the roll number already exists, the existing target record is updated.

### Transform Map Script
See transform_map_script.js

### On Before Script
See on_before_transform_script.js

### Steps to Run
1. Open ServiceNow.
2. Go to System Import Sets -> Load Data.
3. Upload sample_student_data.csv.
4. Choose CSV format and load the file.
5. Create/select the Import Set Table.
6. Create a Transform Map.
7. Select the Student target table.
8. Map the source and target fields.
9. Set Roll No mapping as Coalesce.
10. Add the transform scripts if required.
11. Click Transform.
12. Verify the records in the Student table.

### Expected Result
The five spreadsheet rows should be imported into the Student target table.
If a row has an existing Roll No, Coalesce updates that record instead of creating a duplicate.

### Sample Data
See sample_student_data.csv.

### Viva Questions
1. What is an Import Set?
2. What is a Transform Map?
3. Why is Coalesce used?
4. What is the difference between Import Set Table and Target Table?
5. What is Field Mapping?
6. What is a Transform Map Script?
7. What happens when Coalesce matches an existing record?
8. What is an On Before Transform Script?
9. Why is data validation important during import?
10. What is the purpose of the Import Set Run/Transform History?

### Note
Field names may differ depending on the custom table created in your ServiceNow instance. Replace the u_* field names with your actual field names when necessary.
