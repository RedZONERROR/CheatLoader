# CheatLoader - Complete User Manual

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
4. [Features Guide](#features-guide)
5. [Advanced Usage](#advanced-usage)
6. [Troubleshooting](#troubleshooting)
7. [FAQ](#faq)
8. [Safety & Legal](#safety--legal)

---

## Introduction

### What is CheatLoader?

CheatLoader is an advanced gaming utility and modding tool for Android devices. It allows you to:

- Load custom code and libraries at runtime
- Run apps in secure, isolated container environments
- Modify app behavior without repackaging
- Test and develop mods safely

### Why CheatLoader?

- **No Root Required** - Works on stock Android devices
- **Secure** - Apps run in isolated containers
- **Flexible** - Supports multiple code loading methods
- **Compatible** - Android 8.0 to 14+ support
- **Free & Open Source** - Community-driven development

---

## Installation

### System Requirements

- **Android Version**: 8.0 (API 26) or higher
- **Processor**: ARM64 or ARMv7
- **RAM**: 2GB minimum (4GB recommended)
- **Storage**: 100MB free space
- **Root**: Not required

### Installation Steps

1. **Download APK**
   - Visit [GitHub Releases](https://github.com/RedZONERROR/CheatLoader/releases/latest)
   - Download the latest `CheatLoader-vX.X.X.apk`

2. **Enable Unknown Sources**
   - Go to Settings → Security
   - Enable "Install from Unknown Sources" or "Install Unknown Apps"

3. **Install APK**
   - Open the downloaded APK file
   - Tap "Install"
   - Wait for installation to complete

4. **Grant Permissions**
   - Open CheatLoader
   - Grant requested permissions (Storage, etc.)

---

## Getting Started

### First Launch

1. **Welcome Screen**
   - Read the introduction
   - Accept terms of service
   - Tap "Get Started"

2. **Initial Setup**
   - Choose your language
   - Configure basic settings
   - Complete the tutorial

### Loading Your First App

1. **Import App**
   - Tap the "+" button
   - Select "Import from Device"
   - Choose the app you want to mod

2. **Wait for Processing**
   - CheatLoader will analyze the app
   - This may take a few minutes
   - Progress will be shown

3. **App Ready**
   - App appears in your library
   - Tap to configure or launch

---

## Features Guide

### Custom Code Loading

#### Loading DEX Files

1. Navigate to app settings
2. Tap "Load Custom Code"
3. Select "DEX File"
4. Choose your .dex file
5. Configure load timing (onCreate, onStart, etc.)
6. Save and launch

#### Loading JAR Files

1. Go to app settings
2. Select "Load Custom Code"
3. Choose "JAR File"
4. Select your .jar file
5. Specify main class (if needed)
6. Apply changes

### Native Library Loading

#### Loading .SO Files

1. Open app configuration
2. Tap "Native Libraries"
3. Select "Add Library"
4. Choose your .so file
5. Specify architecture (ARM64/ARMv7)
6. Configure load order
7. Save settings

### Container Environment

#### Isolation Settings

- **File System**: Isolate app's file access
- **Network**: Control network access
- **Permissions**: Manage app permissions
- **Storage**: Separate storage space

#### Configuration

1. Open app settings
2. Go to "Container Settings"
3. Enable desired isolation features
4. Configure storage limits
5. Set network rules
6. Apply changes

### Hook System

#### Method Hooking

1. Navigate to "Hooks" section
2. Tap "Add Hook"
3. Enter class name
4. Enter method name
5. Write hook code
6. Test and save

#### Example Hook

```java
// Hook example
public class MyHook {
    public static void beforeMethod(Object[] args) {
        // Code before original method
    }
    
    public static void afterMethod(Object result) {
        // Code after original method
    }
}
```

---

## Advanced Usage

### Scripting

CheatLoader supports custom scripts for automation:

```javascript
// Example script
function onAppStart() {
    log("App started");
    // Your code here
}

function onAppStop() {
    log("App stopped");
    // Cleanup code
}
```

### Batch Operations

Load multiple mods at once:

1. Create a mod package (.zip)
2. Include all files and config.json
3. Import package in CheatLoader
4. All mods will be loaded automatically

### Custom Configurations

Create reusable configurations:

```json
{
  "name": "My Config",
  "version": "1.0",
  "hooks": [...],
  "libraries": [...],
  "settings": {...}
}
```

---

## Troubleshooting

### Common Issues

#### App Won't Start

**Problem**: App crashes on launch

**Solutions**:
- Check compatibility
- Disable conflicting mods
- Clear app data
- Reinstall in CheatLoader

#### Code Not Loading

**Problem**: Custom code doesn't execute

**Solutions**:
- Verify file format
- Check load timing
- Review logs for errors
- Ensure correct class names

#### Performance Issues

**Problem**: App runs slowly

**Solutions**:
- Reduce active mods
- Increase memory allocation
- Close background apps
- Restart CheatLoader

### Error Codes

- **E001**: File not found
- **E002**: Invalid format
- **E003**: Permission denied
- **E004**: Incompatible version
- **E005**: Memory error

### Getting Help

1. **Check Logs**
   - Settings → Logs
   - Export and share if needed

2. **Community Support**
   - Join [@cheatloaderofficial](https://t.me/cheatloaderofficial)
   - Ask questions
   - Share logs if needed

3. **Report Bugs**
   - GitHub Issues
   - Include device info
   - Attach logs
   - Describe steps to reproduce

---

## FAQ

### General Questions

**Q: Is CheatLoader safe?**
A: Yes, CheatLoader is open source and runs apps in isolated containers for security.

**Q: Do I need root?**
A: No, CheatLoader works on non-rooted devices.

**Q: Is it free?**
A: Yes, CheatLoader is completely free and open source.

**Q: What Android versions are supported?**
A: Android 8.0 (API 26) to Android 14+ (API 36).

### Technical Questions

**Q: Can I use CheatLoader for online games?**
A: While technically possible, we strongly discourage using CheatLoader for online games as it violates terms of service.

**Q: How do I create mods?**
A: Check our [Modding Guide](https://github.com/RedZONERROR/CheatLoader/wiki/Modding-Guide) for tutorials.

**Q: Can I share my mods?**
A: Yes, but ensure you have rights to share and follow our community guidelines.

**Q: Does CheatLoader collect data?**
A: No, CheatLoader does not collect or transmit any user data.

---

## Safety & Legal

### Ethical Use

CheatLoader is designed for:
- ✅ Learning and education
- ✅ Personal app customization
- ✅ Development and testing
- ✅ Research purposes

### Prohibited Uses

Do NOT use CheatLoader for:
- ❌ Cheating in online games
- ❌ Violating terms of service
- ❌ Piracy or copyright infringement
- ❌ Malicious purposes
- ❌ Distributing modified apps without permission

### Legal Disclaimer

- CheatLoader is provided "as is" without warranty
- Users are responsible for their actions
- Developers are not liable for misuse
- Always respect intellectual property rights
- Follow applicable laws and regulations

### Best Practices

1. **Test Offline First** - Test mods in offline mode
2. **Backup Data** - Always backup important data
3. **Respect ToS** - Follow app terms of service
4. **Be Ethical** - Use responsibly and ethically
5. **Stay Updated** - Keep CheatLoader updated

---

## Additional Resources

### Documentation

- [GitHub Wiki](https://github.com/RedZONERROR/CheatLoader/wiki)
- [API Documentation](https://github.com/RedZONERROR/CheatLoader/wiki/API)
- [Modding Guide](https://github.com/RedZONERROR/CheatLoader/wiki/Modding-Guide)

### Community

- [Telegram Channel](https://t.me/cheatloader) - Updates
- [Telegram Chat](https://t.me/cheatloaderofficial) - Support
- [TheRedXStudio](https://t.me/theredxstudio) - Development

### Development

- [GitHub Repository](https://github.com/RedZONERROR/CheatLoader)
- [Contributing Guide](https://github.com/RedZONERROR/CheatLoader/blob/main/CONTRIBUTING.md)
- [Issue Tracker](https://github.com/RedZONERROR/CheatLoader/issues)

---

## Version History

### Latest Version

Check [Releases](https://github.com/RedZONERROR/CheatLoader/releases) for the latest version and changelog.

---

<div align="center">

**Need More Help?**

Join our [Telegram Community](https://t.me/cheatloaderofficial) for support!

Made with ❤️ by [TheRedXStudio](https://t.me/theredxstudio)

</div>
