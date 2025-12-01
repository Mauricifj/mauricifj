```dart
import 'mauricifj.dart';

class AboutMe {
  final String name = 'Maurici';
  final String field = 'Mobile Engineer | Flutter Developer';
  final String motto = 'Write clean code and keep it simple.';
  final String location = 'My Mac and the Cloud ☁️';
  final Uri website = Uri.parse('mauricifj.dev');

  void introduce() {
    print('Hi, I\'m $name — $field 👨‍💻');
    print('📍 Based in: $location');
    print('💬 Motto: $motto');
    print('💻 Website: $website');
  }
}

class Skills {
  final List<String> languages = ['Dart', 'JavaScript (when I must)'];
  final List<String> frameworks = ['Flutter'];
  final List<String> tools = ['Firebase', 'Git', 'Figma'];

  void showSkills() {
    print('🛠️ Languages: $languages');
    print('🧱 Frameworks: $frameworks');
    print('🔧 Tools: $tools');
  }
}

void main() {
  Mauricifj();
  AboutMe().introduce();
  Skills().showSkills();
}
```
