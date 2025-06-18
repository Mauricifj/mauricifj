import 'mauricifj.dart';

class AboutMe extends Developer {
  final String name = "Maurici";
  final String field = "Mobile Engineer | Flutter Developer";
  final String motto = "Write clean code and keep it simple.";
  final String location = "My Mac and the Cloud ☁️";

  void introduce() {
    print("Hi, I'm $name — $field 👨‍💻");
    print("📍 Based in: $location");
    print("💬 Motto: $motto");
  }
}

class Skills extends Developer {
  final List<String> languages = ["Dart", "JavaScript (when I must)"];
  final List<String> frameworks = ["Flutter"];
  final List<String> tools = ["Firebase", "Git", "Figma"];

  void showSkills() {
    print("🛠️ Languages: $languages");
    print("🧱 Frameworks: $frameworks");
    print("🔧 Tools: $tools");
  }
}
