# 🚀 Publishing to VS Code Marketplace

## Prerequisites

1. **Azure DevOps Account**: Sign up at https://dev.azure.com
2. **Personal Access Token (PAT)**:
   - Go to User Settings → Personal Access Tokens
   - Create new token with `Marketplace (Manage)` scope
   - Copy the token (you'll need it once)

## Step-by-Step Publication

### 1. Create Publisher
```bash
vsce create-publisher stabislau-dziarhach
```
Enter your PAT when prompted.

### 2. Login
```bash
vsce login stabislau-dziarhach
```

### 3. Publish
```bash
vsce publish
```

## Alternative: Manual Upload

1. Package the extension:
   ```bash
   vsce package
   ```

2. Go to https://marketplace.visualstudio.com/manage/publishers/stabislau-dziarhach

3. Upload the `soft-blue-theme-1.0.0.vsix` file

## Important Notes

- ✅ Icon added (icon.png)
- ✅ README updated with screenshots
- ✅ Screenshots added (dark-screen.png, light-screen.png)
- ✅ CHANGELOG created
- ✅ License included (MIT)
- ✅ Publisher name set: `stabislau-dziarhach`
- ✅ Keywords optimized for search
- ✅ Description improved
- ✅ Repository links updated
- ✅ Test file translated to English

## Post-Publication

After publishing, your theme will be available at:
https://marketplace.visualstudio.com/items?itemName=stabislau-dziarhach.soft-blue-theme

## Screenshots Added ✅

Screenshots have been successfully added to the `images/` folder:
1. ✅ `dark-screen.png` - Dark theme in action (195 KB)
2. ✅ `light-screen.png` - Light theme in action (192 KB)

The package is now ready for publication with all screenshots included!
