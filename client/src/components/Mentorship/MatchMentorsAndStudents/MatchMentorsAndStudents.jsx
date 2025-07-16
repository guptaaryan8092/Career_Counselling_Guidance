// src/components/Mentorship/MatchMentorsAndStudents/MatchMentorsAndStudents.jsx

// Your matching logic
export function MatchMentorsAndStudents(mentors, students) {
    // Implement your matching algorithm here
    const matchedPairs = [];
  
    // Example matching logic (you need to replace this with your actual logic)
    mentors.forEach(mentor => {
      students.forEach(student => {
        if (mentor.expertise.includes(student.interest)) {
          matchedPairs.push({ mentor, student });
        }
      });
    });
  
    return matchedPairs;
  }
  