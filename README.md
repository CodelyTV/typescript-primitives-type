<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px"/>
  </a>
</p>

<h1 align="center">
  🧩 TypeScript <code>Primitives</code> type
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.tv"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  TypeScript utility type in order to ensure to return only properties (not methods) containing values in primitive types such as number or boolean (not Value Objects).
  <br />
  <br />
  Take a look, play and have fun with this.
  <a href="https://github.com/CodelyTV/typescript-primitives-type/stargazers">Stars are welcome 😊</a>
</p>

# 👀 Usage example

You can have a domain entity such as the following `Course`:

```typescript
import { CourseId } from "./CourseId";
import { CourseTitle } from "./CourseTitle";

export class Course {
  constructor(readonly courseId: CourseId, readonly courseTitle: CourseTitle) {}

  updateTitle(newCourseTitle: CourseTitle): void {
    this.courseTitle = newCourseTitle;
  }

  someOtherMethodWithDomainLogic(): void {
    // some algorithm
  }
}
```

When we want to have a `toPrimitives` method in order to pass an instance of the `Course` class between architectural layers, so the thing we want pass around should be to serialized/marshalled in a way that only containings primitive values such as:

```json
{
  "courseId": "25658f31-2da1-4942-8b58-88aeacc79860",
  "courseTitle": "🚜 TypeScript Avanzado: Más allá de any"
}
```

That is:

- We want to **avoid including methods** such as the `thisFunctionShouldNotBeIncludedInTheToPrimitives` one, so the transformation should only include properties.
- We want to **flatten or unwrap encapsulated properties** such as the `courseId` and `courseTitle` ones. They are modelled as Value Objects (`CourseId` and `CourseTitle` classes), so the transformation or flatten should only include properties in a recursive manner.

That is exactly what our `Primitives<T>` utility type guarantees. Let's add it! 💪

```typescript
import { Primitives } from "@codelytv/primitives-type";

import { CourseId } from "./CourseId";
import { CourseTitle } from "./CourseTitle";

export class Course {
  constructor(readonly courseId: CourseId, readonly courseTitle: CourseTitle) {}

  updateTitle(newCourseTitle: CourseTitle): void {
    this.courseTitle = newCourseTitle;
  }

  someOtherMethodWithDomainLogic(): void {
    // some algorithm
  }

  toPrimitives(): Primitives<Course> {
    return {
      courseId: this.courseId.value,
      courseTitle: this.courseTitle.value,
    };
  }
}
```

Done! ✌️

The `Primitives<Course>` return type is ensuring all our restrictions in a very straighforward way! 🌈

## ❔ Nullable properties support

The `Primitives<T>` type also supports nullable properties. 

Let's say we add a `teacherId` to our `Course`, which can be null:

```typescript
import { Primitives } from "@codelytv/primitives-type";

import { CourseId } from "./CourseId";
import { CourseTitle } from "./CourseTitle";
import { TeacherId } from "./TeacherId";

export class Course {
  constructor(readonly courseId: CourseId, readonly courseTitle: CourseTitle, readonly teacherId: TeacherId | null) {
  }

  updateTitle(newCourseTitle: CourseTitle): void {
    this.courseTitle = newCourseTitle;
  }

  someOtherMethodWithDomainLogic(): void {
    // some algorithm
  }

  toPrimitives(): Primitives<Course> {
    return {
      courseId: this.courseId.value,
      courseTitle: this.courseTitle.value,
      teacherId: this.teacherId?.value ?? null // <- Nullable property
    };
  }
}
```

# 👍 How to install

- Npm: `npm install |--save-dev @codelytv/primitives-type`
- Yarn: `yarn add -D @codelytv/primitives-type`

# 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to met the purpose
- 🎯 **One specific purpose** to met without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

# 🔀 Related utilities and resources

## ☝️ Learning resources

- [🚜 TypeScript Avanzado: Más allá de any](https://pro.codely.tv/library/typescript-avanzado-mas-alla-de-any-182513/418230/about/) (Spanish - Course)
- [📂 DDD en TypeScript: Estructura de carpetas](https://youtu.be/AJJRk7qmVHg) (Spanish - YouTube video)
- [🔖 Domain-Driven Design en TypeScript](https://pro.codely.tv/library/ddd-en-typescript-modelado-y-arquitectura-172533/375662/about/) (Spanish - Course)
- [🐥 JavaScript moderno: Buenas prácticas para empezar y refactorizar aplicaciones](https://pro.codely.tv/library/javascript-moderno-buenas-practicas-para-empezar-y-refactorizar-aplicaciones-69571/208928/about/) (Spanish - Course)
- [🏗️ De JavaScript a TypeScript](https://pro.codely.tv/library/de-javascript-a-typescript-128106/347481/about/) (Spanish - Course)

## 🔷 TypeScript skeletons

- [🌱 TypeScript Basic Skeleton](https://github.com/CodelyTV/typescript-basic-skeleton): Bootstrap your new TypeScript frontend project
- [🌍 TypeScript API Skeleton](https://github.com/CodelyTV/typescript-api-skeleton): Bootstrap your new TypeScript backend project

## 🌈 TypeScript Domain-Driven Design repositories

- [✨ TypeScript DDD Skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton): Bootstrap your new TypeScript projects applying Hexagonal Architecture and Domain-Driven Design patterns
- [🔖 TypeScript DDD Course](https://github.com/CodelyTV/typescript-ddd-course): Learn Domain-Driven Design in TS lesson by lesson
- [🎯 TypeScript DDD Example](https://github.com/CodelyTV/typescript-ddd-example): Complete project applying Hexagonal Architecture and Domain-Driven Design patterns

## 🎯 Other languages Domain-Driven Design repositories

- [☕🎯 Java DDD Example](https://github.com/CodelyTV/java-ddd-example)
- [🐘🎯 PHP DDD Example](https://github.com/CodelyTV/php-ddd-example)
- [λ🎯 Scala DDD Example](https://github.com/CodelyTV/scala-ddd-example)
- [🦈✨ C# DDD Skeleton](https://github.com/CodelyTV/csharp-ddd-skeleton)
