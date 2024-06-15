// function convertAudioBlobToText(audioBlob) {
//     return new Promise((resolve, reject) => {
//       // Convert audio blob into a format suitable for Web Speech API
//       const audioURL = URL.createObjectURL(audioBlob);
  
//       // Initialize SpeechRecognition object
//       const recognition = new webkitSpeechRecognition(); // For Webkit-based browsers
//       recognition.continuous = false; // Set to true for continuous recognition
//       recognition.lang = 'en-US'; // Language for speech recognition
  
//       // Event listener when recognition starts
//       recognition.onstart = () => {
//         console.log('Speech recognition started...');
//       };
  
//       // Event listener for speech recognition result
//       recognition.onresult = (event) => {
//         const speechResult = event.results[event.resultIndex][0].transcript;
//         console.log('Speech result:', speechResult);
  
//         // Resolve the promise with the speech result
//         resolve(speechResult);
//       };
  
//       // Event listener for errors
//       recognition.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//         // Reject the promise with the error
//         reject(event.error);
//       };
  
//       // Set the audio URL as the source for recognition
//       recognition.src = audioURL;
  
//       // Start recognition
//       recognition.start();
//     });
//   }
  
//   export default convertAudioBlobToText