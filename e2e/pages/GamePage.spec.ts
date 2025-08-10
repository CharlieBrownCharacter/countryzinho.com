import { test, expect } from '@playwright/test'
import {
  africaCountries,
  antarcticaCountries,
  asiaCountries,
  europeanCountries,
  northAmericaCountries,
  oceaniaCountries,
  southAmericaCountries,
} from '../../src/services/resources/country/constants'
import { FAST_GUESS_POINTS, GUESS_POINTS } from '../../src/services/resources/point/constants'
import { Country } from '../../src/services/resources/country/types'

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

test.describe('choose continent', () => {
  test('user can pick Africa as continent', async ({ page }) => {
    test.setTimeout(120_000) // 2 min

    await page.goto('/en/game')

    await page.getByRole('button', { name: 'africa' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    for (const country of africaCountries) {
      await page
        .getByTestId('countryInput')
        .pressSequentially(country.allowedGuesses.en[0], { delay: 200 })

      const className = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .getAttribute('class')

      expect(className).toContain('fill-red-400')
    }

    await expect(
      page.getByText(
        `You have named ${africaCountries.length} countries out of ${africaCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('user can pick Antarctica as continent', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'antarctic' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    for (const country of antarcticaCountries) {
      await page
        .getByTestId('countryInput')
        .pressSequentially(country.allowedGuesses.en[0], { delay: 200 })

      const className = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .getAttribute('class')

      expect(className).toContain('fill-red-400')
    }

    await expect(
      page.getByText(
        `You have named ${antarcticaCountries.length} countries out of ${antarcticaCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('user can pick Asia as continent', async ({ page }) => {
    test.setTimeout(120_000) // 2 min

    await page.goto('/en/game')

    await page.getByRole('button', { name: 'asia' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    for (const country of asiaCountries) {
      await page
        .getByTestId('countryInput')
        .pressSequentially(country.allowedGuesses.en[0], { delay: 200 })

      const className = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .getAttribute('class')

      expect(className).toContain('fill-red-400')
    }

    await expect(
      page.getByText(
        `You have named ${asiaCountries.length} countries out of ${asiaCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('user can pick Europe as continent', async ({ page }) => {
    test.setTimeout(120_000) // 2 min

    await page.goto('/en/game')

    await page.getByRole('button', { name: 'europe' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    // We need to order by the smallest country name first because if "ukraine" is
    // first it will first accept "uk" as a country name and playwright will
    // continue to write "raine" and it won't match anything
    const orderedBySmallestNameFirst = europeanCountries.sort((a, b) => {
      const aMin = Math.min(...a.allowedGuesses.en.map((n) => n.length))
      const bMin = Math.min(...b.allowedGuesses.en.map((n) => n.length))
      return aMin - bMin
    })

    for (const country of orderedBySmallestNameFirst) {
      await page.getByTestId('countryInput').pressSequentially(
        (country as Country).allowedGuesses.en.reduce((a, b) => (a.length <= b.length ? a : b)),
        { delay: 200 },
      )

      const hasActiveClass = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .evaluate(
          (el) => el.classList.contains('fill-red-400') || el.classList.contains('fill-slate-200'),
        )

      expect(hasActiveClass).toBe(true)
    }

    await expect(
      page.getByText(
        `You have named ${europeanCountries.length} countries out of ${europeanCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('user can pick North America as continent', async ({ page }) => {
    test.setTimeout(120_000) // 2 min

    await page.goto('/en/game')

    await page.getByRole('button', { name: 'north america' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    const orderedBySmallestNameFirst = northAmericaCountries.sort((a, b) => {
      const aMin = Math.min(...a.allowedGuesses.en.map((n) => n.length))
      const bMin = Math.min(...b.allowedGuesses.en.map((n) => n.length))
      return aMin - bMin
    })

    for (const country of orderedBySmallestNameFirst) {
      await page.getByTestId('countryInput').pressSequentially(
        (country as Country).allowedGuesses.en.reduce((a, b) => (a.length <= b.length ? a : b)),
        { delay: 200 },
      )

      const hasActiveClass = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .evaluate((el) => el.classList.contains('fill-red-400'))

      expect(hasActiveClass).toBe(true)
    }

    await expect(
      page.getByText(
        `You have named ${northAmericaCountries.length} countries out of ${northAmericaCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('user can pick South America as continent', async ({ page }) => {
    test.setTimeout(120_000) // 2 min

    await page.goto('/en/game')

    await page.getByRole('button', { name: 'south america' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    for (const country of southAmericaCountries) {
      await page.getByTestId('countryInput').pressSequentially(
        (country as Country).allowedGuesses.en.reduce((a, b) => (a.length <= b.length ? a : b)),
        { delay: 200 },
      )

      const hasActiveClass = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .evaluate((el) => el.classList.contains('fill-red-400'))

      expect(hasActiveClass).toBe(true)
    }

    await expect(
      page.getByText(
        `You have named ${southAmericaCountries.length} countries out of ${southAmericaCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('user can pick Oceania as continent', async ({ page }) => {
    test.setTimeout(120_000) // 2 min

    await page.goto('/en/game')

    await page.getByRole('button', { name: 'oceania' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    for (const country of oceaniaCountries) {
      await page.getByTestId('countryInput').pressSequentially(
        (country as Country).allowedGuesses.en.reduce((a, b) => (a.length <= b.length ? a : b)),
        { delay: 200 },
      )

      const hasActiveClass = await page
        .locator(`[id="${country.isoAlpha2Code.toLowerCase()}"]`)
        .evaluate((el) => el.classList.contains('fill-red-400'))

      expect(hasActiveClass).toBe(true)
    }

    await expect(
      page.getByText(
        `You have named ${oceaniaCountries.length} countries out of ${oceaniaCountries.length}`,
      ),
    ).toBeVisible()
  })

  test('outside country of chosen continent is not accepted', async ({ page }) => {
    await page.goto('/en/game')

    await page.getByRole('button', { name: 'europe' }).click()

    await page.getByRole('button', { name: 'start' }).click()

    await expect(page.getByTestId('countryInput')).toBeVisible()

    await expect(page.locator('[id="BR"]')).toBeHidden()

    await page.getByTestId('countryInput').pressSequentially('brazil', { delay: 100 })

    expect(await page.getByTestId('countryInput').inputValue()).toBe('brazil')
  })
})
