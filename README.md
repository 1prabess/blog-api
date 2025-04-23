


# Blog API Documentation



## Authentication

Some endpoints require authentication using a **Bearer Token** in the `Authorization` header.

**Authentication Header Example**:
```http
Authorization: Bearer <your_token>
```

Tokens can be obtained via the **Login** API.

### Authentication Flow

1. **Login** to the system using valid user credentials.
2. Receive a **JWT Token**.
3. Include the **Bearer Token** in the `Authorization` header for requests that require authentication.

---

## Response Structure

All API responses follow a consistent format for both success and error scenarios.

### Success Response

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Request successful",
  "data": {
    // Response content
  }
}
```

### Error Response

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Bad Request",
  "error": {
     // Response content
  }
}
```

---

## Users API

### 1. **Register a New User**

**POST** `/api/v1/users/register`

Registers a new user in the system.

#### Request Body

| Field    | Type   | Required | Description             |
|----------|--------|----------|-------------------------|
| firstName | string | Yes      | First name of the user   |
| lastName | string | Yes      | Last name of the user   |
| email    | string | Yes      | User's email address    |
| password | string | Yes      | Password                |

---

### 2. **Login User**

**POST** `/api/v1/users/login`

Authenticates the user and returns a JWT token.

#### Request Body

| Field    | Type   | Required | Description        |
|----------|--------|----------|--------------------|
| email    | string | Yes      | User's email       |
| password | string | Yes      | User's password    |

---

### 3. **Get All Users**

**GET** `/api/v1/users/`

Fetches all registered users. This endpoint does not require authentication.

---

### 4. **Get Authenticated User Profile**

**GET** `/api/v1/users/profile`  
**Authentication Required**

Returns profile details of the currently authenticated user.

---

### 5. **Get Specific User Profile**

**GET** `/api/v1/users/profile/{userId}`

Fetches the profile of a specific user by their ID.

#### Path Parameters

| Parameter | Type   | Description        |
|-----------|--------|--------------------|
| userId    | string | The unique user ID |

---

### 6. **Update User Profile**

**PUT** `/api/v1/users/profile`  
**Authentication Required**

Updates the authenticated user's profile information.

#### Request Body

| Field    | Type   | Required | Description             |
|----------|--------|----------|-------------------------|
| fullName | string | No       | Updated full name       |
| email    | string | No       | Updated email address   |
| password | string | No       | New password            |

---

### 7. **Delete User Profile**

**DELETE** `/api/v1/users/profile`  
**Authentication Required**

Permanently deletes the authenticated user's account.

---

### 8. **Upload Profile Photo**

**POST** `/api/v1/users/profilePhoto`  
**Authentication Required**

Uploads a profile photo for the authenticated user.

#### Form Data

| Field    | Type  | Description             |
|----------|-------|-------------------------|
| profile  | file  | Profile image to upload |

---

### 9. **Follow a User**

**POST** `/api/v1/users/following/{id}`  
**Authentication Required**

Allows the authenticated user to follow another user.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| id        | string | The ID of the user to follow |

---

### 10. **Unfollow a User**

**DELETE** `/api/v1/users/following/{id}`  
**Authentication Required**

Allows the authenticated user to unfollow another user.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| id        | string | The ID of the user to unfollow |

---

## Posts API

### 1. **Create a New Post**

**POST** `/api/v1/posts/`  
**Authentication Required**

Creates a new post in the system.

#### Request Body

| Field   | Type   | Required | Description            |
|---------|--------|----------|------------------------|
| title   | string | Yes      | Title of the post      |
| content | string | Yes      | Content of the post    |

---

### 2. **Get Your Posts**

**GET** `/api/v1/posts/`  
**Authentication Required**

Fetches all posts created by the authenticated user.

---

### 3. **Get Posts by User**

**GET** `/api/v1/posts/user/{userId}`

Fetches all posts created by a specific user.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| userId    | string | The unique user ID     |

---

### 4. **Get Feed Posts**

**GET** `/api/v1/posts/feed`  
**Authentication Required**

Fetches posts from users followed by the authenticated user.

---

### 5. **Get a Specific Post**

**GET** `/api/v1/posts/{postId}`

Returns details of a single post by ID.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| postId    | string | The unique post ID     |

---

### 6. **Like a Post**

**POST** `/api/v1/posts/{postId}/like`  
**Authentication Required**

Likes a specific post.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| postId    | string | The unique post ID     |

---

### 7. **Unlike a Post**

**POST** `/api/v1/posts/{postId}/unlike`  
**Authentication Required**

Removes the like from a specific post.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| postId    | string | The unique post ID     |

---

### 8. **Delete a Post**

**DELETE** `/api/v1/posts/{postId}`  
**Authentication Required**

Deletes a post owned by the authenticated user.

---

### 9. **Update a Post**

**PUT** `/api/v1/posts/{postId}`  
**Authentication Required**

Updates the title and content of a post.

#### Request Body

| Field   | Type   | Required | Description           |
|---------|--------|----------|-----------------------|
| title   | string | No       | New title             |
| content | string | No       | Updated content       |

---

### 10. **Upload Post Thumbnail**

**POST** `/api/v1/posts/{postId}/thumbnail`  
**Authentication Required**

Uploads a thumbnail image for a post.

#### Form Data

| Field     | Type  | Description            |
|-----------|-------|------------------------|
| thumbnail | file  | Image to associate with the post |

---

## Comments API

### 1. **Create a Comment**

**POST** `/api/v1/comments/{postId}`  
**Authentication Required**

Adds a comment to a post.

#### Request Body

| Field   | Type   | Required | Description           |
|---------|--------|----------|-----------------------|
| content | string | Yes      | Text of the comment   |

---

### 2. **Get All Comments on a Post**

**GET** `/api/v1/comments/{postId}`

Fetches all comments associated with a specific post.

#### Path Parameters

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| postId    | string | The unique post ID

---

### 3. **Edit Your Comment**

**PUT** `/api/v1/comments/{commentId}`  
**Authentication Required**

Updates the content of a user's own comment.

#### Request Body

| Field   | Type   | Required | Description           |
|---------|--------|----------|-----------------------|
| content | string | Yes      | Updated comment text  |

---

### 4. **Delete Your Comment**

**DELETE** `/api/v1/comments/{commentId}`  
**Authentication Required**

Deletes a user's own comment.

---

## File Uploads

For uploading profile photos and post thumbnails, use the `multipart/form-data` format.

---

