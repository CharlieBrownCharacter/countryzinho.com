import { test, expect } from '@playwright/test'

test('it has button to start new game', async ({ page }) => {
  await page.goto('/en')

  const link = page.getByRole('link', { name: 'new game' })
  const href = await link.getAttribute('href')

  expect(href).toBe('/en/game')
})

test('it has buttons to switch language', async ({ page }) => {
  await page.goto('/')

  const languages = ['en', 'es', 'pt']

  for (const language of languages) {
    await page.locator(`a[href="/${language}"]`).isVisible()
  }
})

test('it has nav links', async ({ page }) => {
  await page.goto('/en')

  await page.locator(`a[href="/en/contact"]`).isVisible()
  await page.locator(`a[href="/en/terms-of-usage"]`).isVisible()
  await page
    .locator(`a[href="https://github.com/CharlieBrownCharacter/countryzinho.com/"]`)
    .isVisible()
})
