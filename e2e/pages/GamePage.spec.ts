import { test, expect } from '@playwright/test'
import { southAmericaCountries } from '../../src/services/resources/country/constants'
import { FAST_GUESS_POINTS, GUESS_POINTS } from '../../src/services/resources/point/constants'

test.describe('choose time', () => {
  test('user can choose no time', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'no time' }).click()
    await page.getByRole('button', { name: 'start' }).click()
    await expect(page.locator('span', { hasText: 'no time' })).toBeVisible()
  })

  test('user can choose 1 minute', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: '1 minute' }).click()
    await page.getByRole('button', { name: 'start' }).click()
    await expect(page.locator('span', { hasText: '1:00' })).toBeVisible()
  })

  test('user can choose 5 minutes', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: '5 minutes' }).click()
    await page.getByRole('button', { name: 'start' }).click()
    await expect(page.locator('span', { hasText: '5:00' })).toBeVisible()
  })

  test('user can choose 10 minutes', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: '10 minutes' }).click()
    await page.getByRole('button', { name: 'start' }).click()
    await expect(page.locator('span', { hasText: '10:00' })).toBeVisible()
  })
})

test.describe('points', () => {
  test('points updates when user inputs a country', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()
    await page.getByTestId('countryInput').pressSequentially('brazil')
    await expect(page.getByTestId('currentPoints')).toHaveText('10 points')
  })

  test('user gets more points if inputs country fast', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()

    await page.getByTestId('countryInput').pressSequentially('brazil')

    let currentPoints = GUESS_POINTS
    await expect(page.getByTestId('currentPoints')).toHaveText(`${currentPoints} points`)

    await page.getByTestId('countryInput').pressSequentially('portugal')

    currentPoints += FAST_GUESS_POINTS + GUESS_POINTS
    await expect(page.getByTestId('currentPoints')).toHaveText(`${currentPoints} points`)
  })

  test('user gets extra points when completing whole continent', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()

    for (const country of southAmericaCountries) {
      await page
        .getByTestId('countryInput')
        .pressSequentially(country.allowedGuesses.en[0], { delay: 100 })
    }

    await expect(page.getByTestId('currentPoints')).toHaveText('323 points')
    await expect(page.getByTestId('displayPoints')).toHaveText('+13 points South America completed')
  })
})

test.describe('end game early', () => {
  test('user can end game early', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()

    await page.getByTitle('finish game').click()
    await page.getByRole('button', { name: 'end' }).click()
    await expect(page.getByText("Time's up")).toBeVisible()
  })

  test('user can close end game early modal', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()

    await page.getByTitle('finish game').click()
    await page.getByRole('button', { name: 'cancel' }).click()
    await expect(page.getByTestId('countryInput')).toBeVisible()
  })
})

test.describe('restart game', () => {
  test('user can restart game', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()

    await page.getByTitle('Restart game').click()
    await expect(page.getByRole('heading', { name: 'Restart Game' })).toBeVisible()
    await page.getByRole('button', { name: 'Restart', exact: true }).click()
    await expect(page.getByRole('heading', { name: 'Configure your game' })).toBeVisible()
  })

  test('user can close restart game dialog', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'start' }).click()

    await page.getByTitle('Restart game').click()
    await expect(page.getByRole('heading', { name: 'Restart Game' })).toBeVisible()
    await page.getByRole('button', { name: 'Cancel', exact: true }).click()
    await expect(page.getByTestId('countryInput')).toBeVisible()
  })
})
