C:\Code\CppProjects\other>g++ hello.cpp -o hello
hello.cpp: In function 'int main()':
hello.cpp:5:10: error: 'cuot' is not a member of 'std'
     std::cuot << "Hello, world!" << std::endl;
          ^~~~
hello.cpp:5:10: note: suggested alternative: 'clog'
     std::cuot << "Hello, world!" << std::endl;
          ^~~~
          clog
