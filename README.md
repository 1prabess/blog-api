


# Blog API 

This README provides detailed information on the **RESTful API** designed for the **Blog Applications**. It includes available endpoints, request parameters, responses, and authentication requirements.

---

## → Features

- **Users can register by providing their full name, email, and password.**
- **Users can log in with their email and password to receive a JWT token for authentication.**
- **Users can view and update their profile.**
- **Users can permanently delete their account.**
- **Users can upload a profile photo to personalize their account.**
- **Users can follow other users.**
- **Users can unfollow other users.**
- **Users can view the profile information of other users by their ID.**
- **Users can create blog posts.**
- **Users can view all posts created by themselves or by other users.**
- **Users can view information about any specific post, including comments and likes.**
- **Users can update the content of their own posts.**
- **Users can delete their own posts.**
- **Users can like posts they find interesting.**
- **Users can remove their like from a post.**
- **Users can add comments to any post.**
- **Users can view all comments on a specific post.**
- **Users can edit their own comments.**
- **Users can delete their own comments from posts.**
- **Users can upload a profile photo to represent themselves on the platform.**
- **Users can upload a thumbnail image for their posts to enhance their appearance.**
- **All protected routes require a valid JWT token for secure access.**

---

## → Authentication

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

## → Response Structure

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

## → Users API

### 1. **Register a New User**

**POST** `/api/v1/users/register`

Registers a new user in the system.

#### Request Body

| Field    | Type   | Required | Description             |
|----------|--------|----------|-------------------------|
| fullName | string | Yes      | Full name of the user   |
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

## → Posts API

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

## → Comments API

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

## → File Uploads

For uploading profile photos and post thumbnails, use the `multipart/form-data` format.

---

