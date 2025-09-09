document.addEventListener('DOMContentLoaded', () => {
    const sqlQueryInput = document.getElementById('sqlQuery');
    const runButton = document.getElementById('runButton');
    const resultsDiv = document.getElementById('results-table-container');
    const messageDiv = document.getElementById('message');
    const tableDetailsDiv = document.getElementById('tableDetails');

    // Database schema for display
    const dbSchema = {
        Employees: {
            description: "Stores information about employees.",
            columns: [
                { name: "EmployeeID", type: "INT", primaryKey: true, description: "Unique identifier for the employee." },
                { name: "FirstName", type: "VARCHAR(10)", description: "Employee's first name." },
                { name: "LastName", type: "VARCHAR(10)", description: "Employee's last name." },
                { name: "Place", type: "VARCHAR(15)", description: "City or place of the employee." },
                { name: "Country", type: "VARCHAR(15)", description: "Country of the employee." },
                { name: "PhoneNo", type: "CHAR(10)", description: "Employee's phone number." }
            ]
        },
        Rooms: {
            description: "Stores details about meeting rooms.",
            columns: [
                { name: "RoomID", type: "INT", primaryKey: true, description: "Unique identifier for the room." },
                { name: "RoomName", type: "VARCHAR(20)", description: "Name of the room (e.g., 'Training Room')." },
                { name: "Capacity", type: "INT", description: "Maximum capacity of the room." }
            ]
        },
        Meetings: {
            description: "Contains information about scheduled meetings.",
            columns: [
                { name: "MeetingID", type: "INT", primaryKey: true, description: "Unique identifier for the meeting." },
                { name: "TimeFrom", type: "TIME", description: "Start time of the meeting." },
                { name: "TimeTo", type: "TIME", description: "End time of the meeting." },
                { name: "RoomID", type: "INT", foreignKey: "Rooms(RoomID)", description: "Foreign key linking to the Rooms table." },
                { name: "MeetingTitle", type: "VARCHAR(30)", description: "Title or subject of the meeting." },
                { name: "MeetingDate", type: "DATE", description: "Date of the meeting." }
            ]
        },
        EmployeesMeetings: {
            description: "Junction table linking employees to meetings (many-to-many relationship).",
            columns: [
                { name: "EmployeeID", type: "INT", foreignKey: "Employees(EmployeeID)", primaryKey: true, description: "Foreign key linking to the Employees table." },
                { name: "MeetingID", type: "INT", foreignKey: "Meetings(MeetingID)", primaryKey: true, description: "Foreign key linking to the Meetings table." }
            ]
        }
    };


    // Initialize the database and load data
    function initializeDatabase() {
        try {
            alasql('CREATE TABLE Employees (EmployeeID INT PRIMARY KEY, FirstName VARCHAR(10), LastName VARCHAR(10), Place VARCHAR(15), Country VARCHAR(15), PhoneNo CHAR(10))');
            alasql(`INSERT INTO Employees VALUES(1,'Merbin','Joe','Mulagumoodu','India',9944590600)`);
            alasql(`INSERT INTO Employees VALUES(2,'Ganesh','Kumar','Azagiyamandabam','India',9546540300)`);
            alasql(`INSERT INTO Employees VALUES(3,'Franklin','Jose','Madurai','India',8944395603)`);
            alasql(`INSERT INTO Employees VALUES(4,'Arul','Selva Raj','Chennai','India',9744890600)`);
            alasql(`INSERT INTO Employees VALUES(5,'Meena','Kumari','Marthandam','India',7943599609)`);
            alasql(`INSERT INTO Employees VALUES(6,'Jino','Morargis','Colachal','India',8964590605)`);
            alasql(`INSERT INTO Employees VALUES(7,'Anish',null,'Thuckalay','India',6945590608)`);
            alasql(`INSERT INTO Employees VALUES(8,'Aravindh','Pattam','Mulagumoodu','India',9443590640)`);
            alasql(`INSERT INTO Employees VALUES(9,'Kannan',null,'Trivandrum','India',4945563153)`);
            alasql(`INSERT INTO Employees VALUES(10,'Abdon','Raj','Alabama','United States',9934522155)`);
            alasql(`INSERT INTO Employees VALUES(11,'Abishai',null,'Alaska','United States',9845552786)`);
            alasql(`INSERT INTO Employees VALUES(12,'Ely','Jak','Arizona','United States',3934493650)`);
            alasql(`INSERT INTO Employees VALUES(13,'Maci','Keerthi','Arkansas','United States',593439320)`);
            alasql(`INSERT INTO Employees VALUES(14,'Jinu','Silpha','California','United States',894449420)`);
            alasql(`INSERT INTO Employees VALUES(15,'Rajesh','Kan','Connecticut','United States',193439121)`);
            alasql(`INSERT INTO Employees VALUES(16,'Amir','Khan','Iowa','United States',494443420)`);
            alasql(`INSERT INTO Employees VALUES(17,'Jothi','Rajan','Michigan','United States',694449423)`);
            alasql(`INSERT INTO Employees VALUES(18,'Chenthil',null,'Minnesota','United States',660449322)`);
            alasql(`INSERT INTO Employees VALUES(19,'Mani','Vannan','New Jersey','United States',954449423)`);
            alasql(`INSERT INTO Employees VALUES(20,'Jeba','Cerin','New York','United States',894449435)`);
            alasql(`INSERT INTO Employees VALUES(21,'Jerin','Shalin','New Mexico','United States',592443420)`);
            alasql(`INSERT INTO Employees VALUES(22,'Kishore','Francis','Texas','United States',794239421)`);
            alasql(`INSERT INTO Employees VALUES(23,'Jestus','Raja','Washington','United States',594439450)`);
            alasql(`INSERT INTO Employees VALUES(24,'Rani','Kannan','West Virginia','United States',854349420)`);
            alasql(`INSERT INTO Employees VALUES(25,'Robi','Raj','Wisconsin','United States',794549423)`);
            alasql(`INSERT INTO Employees VALUES(26,'Jasmin','Pradeeba','London','United Kingdom',494349425)`);
            alasql(`INSERT INTO Employees VALUES(27,'Kavitha','kannan','Birmingham','United Kingdom',394349420)`);
            alasql(`INSERT INTO Employees VALUES(28,'John','Bosco','Glasgow','United Kingdom',794339420)`);
            alasql(`INSERT INTO Employees VALUES(29,'Tyno',null,'Liverpool','United Kingdom',964749425)`);
            alasql(`INSERT INTO Employees VALUES(30,'Godson','Sweety','Leeds','United Kingdom',853249420)`);
            alasql(`INSERT INTO Employees VALUES(31,'Slayan','kal','Sheffield','United Kingdom',875254520)`);
            alasql(`INSERT INTO Employees VALUES(32,'Kavitha','Moorthy','Edinburgh','United Kingdom',345345420)`);
            alasql(`INSERT INTO Employees VALUES(33,'Kospu','K','Bristol','United Kingdom',345345420)`);
            alasql(`INSERT INTO Employees VALUES(34,'Princs','Jenifer','Manchester','United Kingdom',234246420)`);
            alasql(`INSERT INTO Employees VALUES(35,'Johnre','Mon','Leicester','United Kingdom',634549440)`);
            alasql(`INSERT INTO Employees VALUES(36,'Robin','Philiph','Belfast','United Kingdom',345634343)`);
            alasql(`INSERT INTO Employees VALUES(37,'Antony','Dhas','Dudley','United Kingdom',344359420)`);
            alasql(`INSERT INTO Employees VALUES(38,'Anish','Brito','Carlisle','United Kingdom',345643420)`);
            alasql(`INSERT INTO Employees VALUES(39,'Suresh','Kumar','Hove','United Kingdom',435559820)`);
            alasql(`INSERT INTO Employees VALUES(40,'Pandi',null,'Chatham','United Kingdom',856622420)`);
            alasql(`INSERT INTO Employees VALUES(41,'Nixon',null,'Warrington','United Kingdom',785551008)`);
            alasql(`INSERT INTO Employees VALUES(42,'Anish','Maxwel','Horsham','United Kingdom',787125650)`);
            alasql(`INSERT INTO Employees VALUES(43,'Rashwin',null,'Weymouth','United Kingdom',394449425)`);
            alasql(`INSERT INTO Employees VALUES(44,'Rathika','Raj','Keighley','United Kingdom',594443425)`);
            alasql(`INSERT INTO Employees VALUES(45,'Stellabai',null,'Corby','United Kingdom',494539421)`);
            alasql(`INSERT INTO Employees VALUES(46,'Jesu','Raj','Kabul','Afghanistan',714239420)`);
            alasql(`INSERT INTO Employees VALUES(47,'Thanka','Raj','Kandahar','Afghanistan',295652420)`);
            alasql(`INSERT INTO Employees VALUES(48,'Kuttan',null,'Herat','Afghanistan',787465422)`);
            alasql(`INSERT INTO Employees VALUES(49,'Merlin','Raj','Kunduz','Afghanistan',558945330)`);
            alasql(`INSERT INTO Employees VALUES(50,'Faustina','Joe','Texas','United States',789955231)`);
            alasql(`INSERT INTO Employees VALUES(51,'Clansi','Deena','New York','United States',496512361)`);
            alasql(`INSERT INTO Employees VALUES(52,'Dhashni',null,'Mulagumoodu','India',765425421)`);
            alasql(`INSERT INTO Employees VALUES(53,'Adlin',null,'Mulagumoodu','India',574564545)`);
            alasql(`INSERT INTO Employees VALUES(54,'Nivatha',null,'Mulagumoodu','India',232456346)`);
            alasql(`INSERT INTO Employees VALUES(55,'Krishna','Vani','Malabar','United Kingdom',453453345)`);
            alasql(`INSERT INTO Employees VALUES(56,'John','Bosco','Mulagumoodu','India',885653221)`);
            alasql(`INSERT INTO Employees VALUES(57,'Deepa','Rajan','Mulagumoodu','India',986567545)`);
            alasql(`INSERT INTO Employees VALUES(58,'Magesh',null,'Leeds','United Kingdom',554469466)`);
            alasql(`INSERT INTO Employees VALUES(59,'Jenish',null,'Mulagumoodu','India',978651122)`);
            alasql(`INSERT INTO Employees VALUES(60,'Sreeju','Kuttan','Mulagumoodu','India',447899220)`);
            alasql(`INSERT INTO Employees VALUES(61,'Anjali',null,'Mulagumoodu','India',554899221)`);
            alasql(`INSERT INTO Employees VALUES(62,'Satheesh','Kumar','Kollam','Afghanistan',543454344)`);
            alasql(`INSERT INTO Employees VALUES(63,'Jerold','Raj','Mulagumoodu','India',424656544)`);
            alasql(`INSERT INTO Employees VALUES(64,'Reegan',null,'Horsham','United Kingdom',885655744)`);
            alasql(`INSERT INTO Employees VALUES(65,'Gohul',null,'California','United States',778899552)`);

            alasql('CREATE TABLE Rooms (RoomID INT PRIMARY KEY, RoomName VARCHAR(20), Capacity INT)');
            alasql(`INSERT INTO Rooms VALUES(1,'Training Room',60)`);
            alasql(`INSERT INTO Rooms VALUES(2,'Guest Room',10)`);
            alasql(`INSERT INTO Rooms VALUES(3,'Conference Room 1',20)`);
            alasql(`INSERT INTO Rooms VALUES(4,'Conference Room 2',10)`);
            alasql(`INSERT INTO Rooms VALUES(5,'Conference Room 3',7)`);
            alasql(`INSERT INTO Rooms VALUES(6,'A/C Room',9)`);
            alasql(`INSERT INTO Rooms VALUES(7,'Non A/C Room',78)`);
            alasql(`INSERT INTO Rooms VALUES(8,'Meeting Room 1',3)`);
            alasql(`INSERT INTO Rooms VALUES(9,'Meeting Room 2',26)`);
            alasql(`INSERT INTO Rooms VALUES(10,'Meeting Room 3',100)`);
            alasql(`INSERT INTO Rooms VALUES(11,'Meeting Room 4',81)`);

            alasql('CREATE TABLE Meetings (MeetingID INT PRIMARY KEY, TimeFrom TIME, TimeTo TIME, RoomID INT, MeetingTitle VARCHAR(30), MeetingDate DATE)');
            alasql(`INSERT INTO Meetings VALUES(1,'3:30 PM','4:00 PM',1,'Appraisal Meeting','8-18-2016')`);
            alasql(`INSERT INTO Meetings VALUES(2,'10:30 AM','12:00 PM',2,'Exit Meeting','8-19-2016')`);
            alasql(`INSERT INTO Meetings VALUES(3,'11:00 AM','12:00 PM',3,'Manager Change Meeting','8-21-2016')`);
            alasql(`INSERT INTO Meetings VALUES(4,'4:15 PM','5:30 PM',2,'Termination Meeting','8-20-2016')`);
            alasql(`INSERT INTO Meetings VALUES(5,'4:30 PM','5:00 PM',5,'Clearance Meeting','8-7-2016')`);
            alasql(`INSERT INTO Meetings VALUES(6,'9:00 AM','10:15 AM',8,'New Project Meeting','8-5-2016')`);
            alasql(`INSERT INTO Meetings VALUES(7,'9:10 AM','11:30 AM',3,'Project Discussion Meeting','8-18-2016')`);
            alasql(`INSERT INTO Meetings VALUES(8,'2:30 PM','4:00 PM',2,'Appraisal Meeting','8-8-2016')`);
            alasql(`INSERT INTO Meetings VALUES(9,'1:30 PM','3:15 PM',9,'System Maintenance Meeting','8-28-2016')`);
            alasql(`INSERT INTO Meetings VALUES(10,'12:30 PM','2:10 PM',6,'Termination Meeting','8-24-2016')`);
            alasql(`INSERT INTO Meetings VALUES(11,'9:30 AM','10:00 AM',8,'Feastival Meeting','8-18-2016')`);
            alasql(`INSERT INTO Meetings VALUES(12,'1:30 PM','3:00 PM',7,'Project Meeting','8-5-2016')`);
            alasql(`INSERT INTO Meetings VALUES(13,'3:15 PM','4:15 PM',1,'New Task Meeting','8-4-2016')`);
            alasql(`INSERT INTO Meetings VALUES(14,'4:00 PM','5:00 PM',2,'Appraisal Meeting','8-5-2016')`);
            alasql(`INSERT INTO Meetings VALUES(15,'4:45 PM','6:00 PM',3,'Discipline Meeting','7-1-2016')`);
            alasql(`INSERT INTO Meetings VALUES(16,'10:45 AM','11:45 AM',2,'Performance Meeting','7-5-2016')`);
            alasql(`INSERT INTO Meetings VALUES(17,'2:25 PM','3:00 PM',6,'Branch Transfer Meeting','7-6-2016')`);
            alasql(`INSERT INTO Meetings VALUES(18,'11:30 AM','12:30 PM',5,'Leave Meeting','9-21-2016')`);
            alasql(`INSERT INTO Meetings VALUES(19,'11:00 AM','11:45 AM',9,'Onsite Meeting','9-2-2016')`);
            alasql(`INSERT INTO Meetings VALUES(20,'10:00 AM','11:00 PM',11,'Appraisal Meeting','9-12-2016')`);
            alasql(`INSERT INTO Meetings VALUES(21,'11:00 AM','12:00 PM',10,'Clearance Meeting','9-17-2016')`);
            alasql(`INSERT INTO Meetings VALUES(22,'9:30 AM','11:00 AM',6,'Appraisal Meeting','8-13-2016')`);
            alasql(`INSERT INTO Meetings VALUES(23,'10:30 AM','12:00 PM',4,'Performance Meeting','8-16-2016')`);
            alasql(`INSERT INTO Meetings VALUES(24,'11:00 AM','1:00 PM',4,'HR Meeting','7-18-2016')`);
            alasql(`INSERT INTO Meetings VALUES(25,'10:00 AM','2:00 PM',3,'New Requirement Meeting','9-14-2016')`);
            alasql(`INSERT INTO Meetings VALUES(26,'12:30 PM','1:00 PM',7,'Clearance Meeting','9-7-2016')`);
            alasql(`INSERT INTO Meetings VALUES(27,'8:30 AM','10:00 AM',3,'Account Meeting','7-29-2016')`);
            alasql(`INSERT INTO Meetings VALUES(28,'9:00 AM','12:00 PM',8,'Client Meeting','8-28-2016')`);
            alasql(`INSERT INTO Meetings VALUES(29,'9:25 AM','11:00 AM',9,'HR Meeting','9-21-2016')`);
            alasql(`INSERT INTO Meetings VALUES(30,'10:00 AM','2:00 PM',11,'Manager Meeting','8-7-2016')`);
            alasql(`INSERT INTO Meetings VALUES(31,'2:30 PM','4:00 PM',1,'Project Meeting','7-5-2016')`);
            alasql(`INSERT INTO Meetings VALUES(32,'3:30 PM','4:15 PM',2,'Feastival Meeting','9-19-2016')`);
            alasql(`INSERT INTO Meetings VALUES(33,'9:00 PM','10:00 PM',1,'Final Meeting','10-2-2016')`);

            alasql('CREATE TABLE EmployeesMeetings (EmployeeID INT, MeetingID INT, PRIMARY KEY(EmployeeID, MeetingID))');
            alasql(`INSERT INTO EmployeesMeetings VALUES(1,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(2,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(4,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(6,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(7,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(10,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(11,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(27,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(21,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(33,2)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(1,1)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(2,1)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(60,5)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(64,5)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(50,3)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(31,3)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(32,6)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(65,7)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(65,8)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(65,9)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(27,9)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(18,10)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(17,11)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(13,15)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(28,15)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(22,15)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(20,12)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(7,13)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(45,14)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(46,12)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(35,13)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(31,13)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(19,16)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(13,17)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(10,17)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(61,18)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(1,19)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(2,19)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(3,19)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(1,20)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(33,21)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(50,22)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(50,23)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(1,24)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(13,24)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(10,25)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(14,26)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(13,26)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(19,26)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(61,27)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(2,28)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(33,29)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(2,30)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(28,30)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(64,31)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(9,31)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(8,32)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(10,33)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(11,33)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(12,33)`);
            alasql(`INSERT INTO EmployeesMeetings VALUES(13,33)`);

        } catch (e) {
            console.error("Failed to initialize database:", e);
        }
    }

    // Function to render database schema details
    function renderTableDetails() {
        let html = '';
        for (const tableName in dbSchema) {
            const table = dbSchema[tableName];
            html += `
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-blue-700 mb-2 flex items-center">
                        <i class="fas fa-table mr-2"></i> ${tableName}
                    </h3>
                    <p class="text-gray-700 mb-2">${table.description}</p>
                    <ul class="list-disc list-inside ml-4 text-gray-700">
            `;
            table.columns.forEach(col => {
                let colInfo = `<code class="font-mono bg-blue-100 px-1 rounded">${col.name}</code>: <span class="text-purple-700">${col.type}</span>`;
                if (col.primaryKey) {
                    colInfo += ` <span class="text-yellow-600">(PK)</span>`;
                }
                if (col.foreignKey) {
                    colInfo += ` <span class="text-green-600">(FK to ${col.foreignKey})</span>`;
                }
                colInfo += ` - ${col.description}`;
                html += `<li>${colInfo}</li>`;
            });
            html += `
                    </ul>
                </div>
            `;
        }
        tableDetailsDiv.innerHTML = html;
    }

    // Function to render results as an HTML table
    function renderTable(data) {
        if (!data || data.length === 0) {
            resultsDiv.innerHTML = '<p class="text-gray-500 italic text-center">No results found.</p>';
            return;
        }

        const table = document.createElement('table');
        table.className = "min-w-full divide-y divide-gray-200";

        // Table Header
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        // Use Object.keys(data[0]) only if data[0] exists
        if (data[0]) {
            Object.keys(data[0]).forEach(key => {
                const th = document.createElement('th');
                th.textContent = key;
                th.className = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
                headerRow.appendChild(th);
            });
        }


        // Table Body
        const tbody = table.createTBody();
        data.forEach(row => {
            const tr = tbody.insertRow();
            tr.className = "bg-white";
            Object.values(row).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value === null ? 'NULL' : value;
                td.className = "px-6 py-4 whitespace-nowrap text-sm text-gray-900";
                tr.appendChild(td);
            });
        });

        resultsDiv.innerHTML = ''; // Clear previous content
        resultsDiv.appendChild(table);
    }

    // Function to run the query
    function runQuery() {
        const query = sqlQueryInput.value.trim();
        messageDiv.classList.add('hidden');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (!query) {
            resultsDiv.innerHTML = '<p class="text-gray-500 italic text-center">Please enter a query to run.</p>';
            return;
        }

        try {
            // AlaSQL can handle multiple statements if separated by semicolon, but for result display,
            // we usually want the last SELECT statement's output.
            // For this simple playground, we assume a single SELECT query for results.
            const result = alasql(query);

            // If the query returns an array of results (like SELECT statements), render it.
            // If it's a DDL/DML statement, it might return a number (rows affected) or undefined.
            if (Array.isArray(result)) {
                renderTable(result);
            } else {
                resultsDiv.innerHTML = `<p class="text-gray-500 italic text-center">Query executed successfully. Result: ${result}</p>`;
            }

        } catch (err) {
            messageDiv.textContent = `Error: ${err.message}`;
            messageDiv.classList.remove('hidden');
            resultsDiv.innerHTML = ''; // Ensure no stale table is shown on error
        }
    }

    // Event Listeners
    runButton.addEventListener('click', runQuery);
    // Optional: Allow running query with Enter key (Ctrl+Enter or Cmd+Enter for multi-line)
    sqlQueryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault(); // Prevent new line in textarea
            runQuery();
        }
    });

    // Initial setup
    initializeDatabase();
    renderTableDetails(); // Render the database schema details
    sqlQueryInput.value = 'SELECT E.FirstName, M.MeetingTitle, M.MeetingDate, R.RoomName FROM EmployeesMeetings EM JOIN Employees E ON EM.EmployeeID = E.EmployeeID JOIN Meetings M ON EM.MeetingID = M.MeetingID JOIN Rooms R ON M.RoomID = R.RoomID WHERE E.Country = \'India\';';
    runQuery(); // Run a default query to show it's working
});