# PowerShell script to update all plugin README.md files with versioned tags

$packages = Get-ChildItem -Path "packages" -Directory

foreach ($package in $packages) {
    $packageName = $package.Name
    $versionDir = Get-ChildItem -Path $package.FullName -Directory | Where-Object { $_.Name -match "^v\d+\.\d+\.\d+$" } | Select-Object -First 1
    
    if ($versionDir) {
        $version = $versionDir.Name.Substring(1) # Remove 'v' prefix
        $readmePath = Join-Path $versionDir.FullName "README.md"
        
        if (Test-Path $readmePath) {
            Write-Host "Updating $packageName..."
            
            # Read the content
            $content = Get-Content $readmePath -Raw
            
            # Update tag names with version
            $newTagName = "$packageName-$version"
            
            # Replace opening tags
            $content = $content -replace "<$packageName\b([^>]*)>", "<$newTagName`$1>"
            
            # Replace closing tags
            $content = $content -replace "</$packageName>", "</$newTagName>"
            
            # Replace createElement calls
            $content = $content -replace "createElement\('$packageName'\)", "createElement('$newTagName')"
            
            # Replace querySelector calls
            $content = $content -replace "querySelector\('$packageName'\)", "querySelector('$newTagName')"
            
            # Replace querySelectorAll calls
            $content = $content -replace "querySelectorAll\('$packageName'\)", "querySelectorAll('$newTagName')"
            
            # Replace CSS selectors
            $content = $content -replace "(?m)^$packageName\s*\{", "$newTagName {"
            $content = $content -replace "$packageName\s+([a-zA-Z])", "$newTagName `$1"
            
            # Write back the updated content
            Set-Content $readmePath $content -Encoding UTF8
            
            Write-Host "Updated $packageName to use $newTagName"
        }
    }
}

Write-Host "Completed updating all README.md files!"
