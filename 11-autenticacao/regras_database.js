rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Só permite ler ou escrever se o "request.auth" não for nulo
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}