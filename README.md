# FakerAI.js 🧠🤖
Generate structured fake data using AI (GPT-4) effortlessly!

## 🚀 Features
- **Schema-based generation**: Define precise JSON structures.
- **AI-powered data**: Uses OpenAI's models to generate realistic fake data.
- **Multi-language support**: Control output language globally.
- **Custom prompts**: Define per-field prompts for accurate results.

---

## 📦 Installation
```sh
npm install faker-ai-js
```

or

```sh
yarn add faker-ai-js
```

---

## 🛠️ Usage
### 1️⃣ **Initialize the Library**
```ts
import { init, generate } from "faker-ai-js";

init({
  apiKey: "sk-xxxx",  // Your OpenAI API key
  model: "gpt-4",     // AI model to use
  language: "en"      // Default language ("en", "fr", "es", "de", etc.)
});
```

### 2️⃣ **Basic Text Generation**
```ts
const fakeBio = await generate("Generate a short biography for a fictional character.");
console.log(fakeBio);
```

### 3️⃣ **Structured Data Generation**
You can define a **strict schema** to control the AI's output:

```ts
const userSchema = {
  object: {
    name: { type: "string", description: "A common first name" },
    age: { type: "number", description: "An age between 18 and 65" },
    email: "string"
  },
  description: "A realistic fictional user"
};

const fakeUser = await generate("Generate a fictional user", userSchema);
console.log(fakeUser);
```

### 4️⃣ **Array Example: Generating Multiple Items**
```ts
const productSchema = {
  array: {
    object: {
      id: { type: "string", description: "A unique product identifier" },
      name: "string",
      price: { type: "number", description: "Price in USD" },
    }
  },
  length: 10, // Generate 10 products
  description: "A list of fake products"
};

const fakeProducts = await generate("Generate a list of 10 products", productSchema);
console.log(fakeProducts);
```

---

## ⚙️ API Reference
### **`init(options: FakerAiOptions)`**
Initialize the library with API credentials and settings.
#### **Parameters:**
| Name     | Type      | Required | Description |
|----------|----------|----------|-------------|
| `apiKey` | `string`  | ✅       | OpenAI API key |
| `model`  | `string`  | ✅       | AI model (e.g., `"gpt-4"`) |
| `language` | `"en" | "fr" | "es" | "de"` | ❌ (default `"en"`) | Default output language |

---

### **`generate(prompt: string, schema?: SchemaType): Promise<any>`**
Generates data based on a custom prompt and optional schema.
#### **Parameters:**
| Name      | Type           | Required | Description |
|-----------|---------------|----------|-------------|
| `prompt`  | `string`      | ✅        | Custom AI prompt |
| `schema`  | `SchemaType`  | ❌        | Optional strict data structure |

---

## 📝 Schema Definition
The schema allows you to enforce a **structured JSON output**.
### **Basic Types**
| Type     | Example |
|----------|---------|
| `"string"`  | `"John Doe"` |
| `"number"`  | `42` |
| `"boolean"` | `true` |
| `"date"`    | `"2025-01-01"` |

### **Object Example**
```ts
const personSchema = {
  object: {
    firstName: "string",
    lastName: "string",
    age: { type: "number", description: "Between 18 and 60" }
  }
};
```

### **Array Example**
```ts
const usersSchema = {
  array: {
    object: {
      name: "string",
      email: "string"
    }
  },
  length: 5, // Generate 5 users
};
```

---

## 🌎 Multi-Language Support
The library supports **multiple output languages**.  
Set the **`language`** in `init()` to `"en"`, `"fr"`, `"es"`, `"de"`, etc.

```ts
init({ apiKey: "sk-xxx", model: "gpt-4", language: "fr" });
const fakeUser = await generate("Génère un utilisateur fictif", userSchema);
console.log(fakeUser);
```

---

## 🏗️ Roadmap
- [ ] **Custom field validation**
- [ ] **Support for enums (`"male" | "female"` etc.)**
- [ ] **Custom AI model configuration**
- [ ] **Improved performance with caching**

---

## 💡 Why Use FakerAI.js?
✅ No more manually creating fake data 🚀  
✅ Ensures realistic and structured outputs 🧠  
✅ Fully customizable with AI-powered generation 🤖

---

## 🛠️ Contributing
Pull requests are welcome! If you find a bug or want to request a feature, feel free to open an issue.  
