<template>
  <div>
    <div class="hero min-h-screen bg-base-200 overflow-x-auto">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <div class="bg-base-200"><h1 class="title">Skills</h1></div>
          <div class="divider"></div>
          <div class="overflow-x-auto">
            <table class="table w-auto">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Language</th>
                  <th>Libraries / Frameworks</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>1</th>
                  <td>JS/TS</td>
                  <td>Vue, React, Svelte, Solid</td>
                </tr>
                <!-- row 2 -->
                <tr>
                  <th>2</th>
                  <td>HTML</td>
                  <td>JSX</td>
                </tr>
                <!-- row 3 -->
                <tr>
                  <th>3</th>
                  <td>CSS</td>
                  <td>TailwindCSS, DaisyUI</td>
                </tr>
                <!-- row 4 -->
                <tr>
                  <th>4</th>
                  <td>NodeJS</td>
                  <td>Firebase, Express</td>
                </tr>
                <!-- row 5 -->
                <tr>
                  <th>5</th>
                  <td>NoSQL</td>
                  <td>Firestore, MongoDB</td>
                </tr>
                <!-- row 6 -->
                <tr>
                  <th>6</th>
                  <td>SDL</td>
                  <td>GraphQL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
